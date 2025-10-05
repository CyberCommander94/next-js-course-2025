'use client';

import { useSetIsFavorite } from '@/providers/favorite/hooks';
import { FC, useCallback, useState, use } from 'react';
import { Bookmark } from 'lucide-react';
import { ThemeContext } from '@/providers/theme';

import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { toast } from 'sonner';
import { addToFavorite, deleteFromFavorite } from '@/services/api/rackets/favorite';

interface Props {
  isFavorite: boolean | undefined;
  productId: number | string;
  buttonClasses: string;
  iconSize: number;
}

const handleFavorite = async ({
  isFavorite,
  productId,
}: Pick<Props, 'isFavorite' | 'productId'>) => {
  if (isFavorite) {
    return await deleteFromFavorite(productId);
  } else {
    return await addToFavorite(productId);
  }
};

const FavoriteButton: FC<Props> = ({ isFavorite, productId, buttonClasses, iconSize }) => {
  const { theme } = use(ThemeContext);
  const setFavorite = useSetIsFavorite();
  const [loading, setLoading] = useState(false);

  const handleClick = useCallback(
    async ({ isFavorite, productId }: Pick<Props, 'isFavorite' | 'productId'>) => {
      setLoading(true);
      try {
        setFavorite({ id: productId, isFavorite: !isFavorite });

        await handleFavorite({ isFavorite, productId });

        if (isFavorite) {
          toast.success('Продукт удален из избранного', {
            style: {
              background: '#4caf50',
              color: '#fff',
              borderRadius: '0',
              border: 'none',
            },
          });
        } else {
          toast.success('Продукт добавлен в избранное', {
            style: {
              background: '#4caf50',
              color: '#fff',
              borderRadius: '0',
              border: 'none',
            },
          });
        }
      } catch {
        toast.error('Произошла ошибка при обновлении избранного', {
          style: {
            background: '#e7000b',
            color: '#fff',
            borderRadius: '0',
            border: 'none',
          },
        });
      } finally {
        setLoading(false);
      }
    },
    [setFavorite],
  );

  return (
    <Tooltip>
      <TooltipTrigger
        onClick={() => handleClick({ isFavorite, productId })}
        className={buttonClasses}
        asChild
        disabled={loading}
      >
        <Bookmark
          strokeWidth={1}
          size={iconSize}
          fill={isFavorite ? (theme === 'light' ? '#e7000b' : '#ff6468') : 'transparent'}
          color={theme === 'light' ? '#e7000b' : '#ff6468'}
          className={`cursor-pointer ${loading ? 'opacity-50 pointer-events-none' : ''}`}
        />
      </TooltipTrigger>
      <TooltipContent>
        {isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
      </TooltipContent>
    </Tooltip>
  );
};

export default FavoriteButton;

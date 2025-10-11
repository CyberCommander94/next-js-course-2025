import { getRacketOgDataById } from "@/services/api/rackets";
import { ImageResponse } from "next/og";

export const alt = "OG image";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Props = { params: { id: string } };

export default async function OGImage({ params }: Props) {
const { id } = await params;
const { data } = await getRacketOgDataById({ id: id });

  console.log(data)
  if (!data) {
    return new ImageResponse(
      <div
        style={{
          background: '#111',
          color: '#fff',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 48,
        }}
      >
        Not Found
      </div>,
      { width: 1200, height: 630 }
    );
  }

  const racket = data;

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          gap: '20px',
          background: '#111',
          color: '#fff',
          padding: '40px',
          width: '100%',
          height: '100%',
          alignItems: 'center',
        }}
      >
        <img
          src={racket.imageUrl}
          width={400}
          height={400}
          style={{ objectFit: 'cover', borderRadius: '16px' }}
          alt={racket.name}
        />
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '700px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold' }}>{racket.name}</h2>
          <p style={{ fontSize: '18px', marginTop: '12px' }}>{racket.description}</p>
        </div>
      </div>
    ),
    size
  );
}

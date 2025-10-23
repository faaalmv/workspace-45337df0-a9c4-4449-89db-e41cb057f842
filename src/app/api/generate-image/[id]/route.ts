import { NextRequest, NextResponse } from 'next/server';

// Mapeo de IDs a semillas de imágenes para consistencia
const imageSeeds: { [key: string]: string } = {
  '1': 'dental-before-1',
  '2': 'dental-after-1',
  '3': 'ortho-before',
  '4': 'ortho-after',
  '5': 'veneer-before',
  '6': 'veneer-after',
  '7': 'doctor-portrait',
};

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // CORRECCIÓN: Se accede a `params.id` de forma segura.
  const imageId = params.id;
  const seed = imageSeeds[imageId as keyof typeof imageSeeds];

  if (!seed) {
    return NextResponse.json({ error: 'Image seed not found' }, { status: 404 });
  }

  // CORRECCIÓN: Se elimina la dependencia de Z-AI y se redirige a un servicio de imágenes.
  const imageUrl = `https://picsum.photos/seed/${seed}/1024/768`;

  // Se usa una redirección temporal (307) para que el navegador vaya a buscar la imagen.
  return NextResponse.redirect(imageUrl);
}
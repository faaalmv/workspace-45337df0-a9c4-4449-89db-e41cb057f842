import { NextRequest, NextResponse } from 'next/server'

// Mapeo de IDs a semillas de imágenes para consistencia
const imageSeeds: { [key: string]: string } = {
  '1': 'dental-before-1',
  '2': 'dental-after-1',
  '3': 'ortho-before',
  '4': 'ortho-after',
  '5': 'veneer-before',
  '6': 'veneer-after',
  '7': 'doctor-portrait',
}

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const imageId = params.id
  const seed = imageSeeds[imageId as keyof typeof imageSeeds]

  if (!seed) {
    return NextResponse.json({ error: 'Image seed not found' }, { status: 404 })
  }

  // Redirige a un servicio de imágenes de relleno como picsum.photos
  // Usamos una semilla para obtener la misma imagen cada vez para un ID dado.
  // El tamaño es 1024x768 como lo tenías configurado.
  const imageUrl = `https://picsum.photos/seed/${seed}/1024/768`

  return NextResponse.redirect(imageUrl, 307)
}
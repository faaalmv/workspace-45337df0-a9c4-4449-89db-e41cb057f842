import { NextRequest, NextResponse } from 'next/server'
import ZAI from 'z-ai-web-dev-sdk'

const imagePrompts = {
  '1': 'Modern dental clinic facade with glass door and plants, professional medical building exterior, clean and welcoming',
  '2': 'Modern dental clinic reception area with purple walls, marble desk, comfortable chairs and plants, professional medical office',
  '3': 'Dental clinic waiting room with marble reception desk, pink armchairs, glass table and plants, contemporary design',
  '4': 'Professional dental treatment room with white walls, dental chair, modern equipment and cabinets, medical facility',
  '5': 'Dental clinic treatment room with dental chair, professional equipment, white tiles and certificates on wall, clean environment',
  '6': 'Dental clinical area with treatment equipment, cabinets, plants and professional medical setup, modern dental office',
  '7': 'Dental clinic room with advanced medical equipment, movable device with arm, white chairs and cabinets, high-tech facility'
}

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const imageId = params.id
  const prompt = imagePrompts[imageId as keyof typeof imagePrompts]

  if (!prompt) {
    return NextResponse.json({ error: 'Image prompt not found' }, { status: 404 })
  }

  try {
    const zai = await ZAI.create()
    
    const response = await zai.images.generations.create({
      prompt: prompt,
      size: '1024x768'
    })

    const imageBase64 = response.data[0]?.base64
    
    if (!imageBase64) {
      throw new Error('No image data received')
    }

    // Convert base64 to buffer
    const imageBuffer = Buffer.from(imageBase64, 'base64')
    
    return new NextResponse(imageBuffer, {
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=31536000',
        'Access-Control-Allow-Origin': '*',
      },
    })
  } catch (error) {
    console.error('Error generating image:', error)
    return NextResponse.json({ error: 'Failed to generate image' }, { status: 500 })
  }
}
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import supabase from '@/utils/supabase'

export const GET = async (request: Request) => {
    // published_atがnullでないものを取得
    const { data: events } = await supabase.from('events').select('*').not('published_at', 'is', null)

    try {

        return NextResponse.json(events);

    } catch (error) {
        return NextResponse.json({
            message: error?.toString() || error,
        }, {
            status: 400,
        });
    }
}

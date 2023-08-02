import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export const GET = async (request: Request) => {
    const supabase = createRouteHandlerClient({ cookies })
    // published_atがnullでないものを取得
    const { data: supporters } = await supabase.from('supporters').select('*').not('published_at', 'is', null)
    // console.log(supporters)

    try {

        return NextResponse.json(supporters);

    } catch (error) {
        return NextResponse.json({
            message: error?.toString() || error,
        }, {
            status: 400,
        });
    }
}

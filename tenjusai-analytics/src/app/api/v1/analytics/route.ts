import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import supabase from '@/utils/supabase'

export const POST = async (request: Request) => {
    const { data: production } = await supabase.from('accesses').select('*').eq('domain', 'tenjusai.jp')
    const { data: development } = await supabase.from('accesses').select('*').eq('domain', 'tenjusai2023-git-dev-nishide-dev.vercel.app')
    const { data: local } = await supabase.from('accesses').select('*').eq('domain', 'localhost:3000')
    const { data: b1 } = await supabase.from('accesses').select('*').eq('domain', 'b1.tenjusai.jp')
    const { data: b2 } = await supabase.from('accesses').select('*').eq('domain', 'b2.tenjusai.jp')
    const { data: b3 } = await supabase.from('accesses').select('*').eq('domain', 'b3.tenjusai.jp')
    const { data: b4 } = await supabase.from('accesses').select('*').eq('domain', 'b4.tenjusai.jp')
    const { data: m1 } = await supabase.from('accesses').select('*').eq('domain', 'm1.tenjusai.jp')
    const { data: m2 } = await supabase.from('accesses').select('*').eq('domain', 'm2.tenjusai.jp')
    const { data: shokuin } = await supabase.from('accesses').select('*').eq('domain', 'shokuin.tenjusai.jp')
    const { data: classroom } = await supabase.from('accesses').select('*').eq('domain', 'classroom.tenjusai.jp')

    try {

        return NextResponse.json({
            production,
            development,
            b1,
            b2,
            b3,
            b4,
            m1,
            m2,
            shokuin,
            classroom,
        }, {
            status: 200,
        });

    } catch (error) {
        return NextResponse.json({
            message: error?.toString() || error,
        }, {
            status: 400,
        });
    }
}

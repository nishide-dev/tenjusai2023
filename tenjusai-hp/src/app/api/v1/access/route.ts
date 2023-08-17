import { NextResponse } from 'next/server'
import supabase from '@/utils/supabase';

export const POST = async (request: Request) => {
    const { domain } = await request.json();

    try {
        const { data, error } = await supabase.from('accesses').insert([{
            domain,
        }]);

        return NextResponse.json({
            data,
            error,
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

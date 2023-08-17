import { NextResponse } from 'next/server'

export const GET = async (request: Request) => {
    const domain = request.headers.get('host') || '';

    try {

        return NextResponse.json({
            domain,
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

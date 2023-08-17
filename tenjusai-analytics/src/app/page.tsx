'use client';
import Image from 'next/image'
import { NextUIProvider } from '@nextui-org/react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import useAnalytics from '@/utils/useAnalytics';
import { Analytics } from '@/utils/types';
import Link from 'next/link';

export default function Home() {
  const { analytics } = useAnalytics();

  return (
    <NextUIProvider>
      <main className="flex min-h-screen flex-col items-start justify-start gap-10 pt-16 p-4 xl:p-24">
        <div className="text-2xl">TENJUSAI 2023 ANALYTICS</div>
        <Table removeWrapper aria-label="Example static collection table">
          <TableHeader>
            <TableColumn>NAME</TableColumn>
            <TableColumn>DOMAIN</TableColumn>
            <TableColumn>COUNT</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell>本番環境</TableCell>
              <TableCell><Link className="hover:underline" href={analytics?.production[0].domain ? `https://${analytics?.production[0].domain}` : ""} >{analytics?.production[0].domain ? analytics?.production[0].domain : ""}</Link></TableCell>
              <TableCell>{analytics?.production.length}</TableCell>
            </TableRow>
            <TableRow key="2">
              <TableCell>開発環境</TableCell>
              <TableCell><Link className="hover:underline" href={analytics?.development[0].domain ? `https://${analytics?.development[0].domain}` : ""} >{analytics?.development[0].domain ? analytics?.development[0].domain : ""}</Link></TableCell>
              <TableCell>{analytics?.development.length}</TableCell>
            </TableRow>
            {/* <TableRow key="3">
              <TableCell>B1</TableCell>
              <TableCell><Link className="hover:underline" href={`https://${analytics?.b1[0].domain}` || ""} >{analytics?.b1[0].domain || ""}</Link></TableCell>
              <TableCell>{analytics?.b1.length}</TableCell>
            </TableRow>
            <TableRow key="4">
            <TableCell>B2</TableCell>
            <TableCell><Link className="hover:underline" href={`https://${analytics?.b2[0].domain}` || ""} >{analytics?.b2[0].domain || ""}</Link></TableCell>
              <TableCell>{analytics?.b2.length}</TableCell>
            </TableRow>
            <TableRow key="5">
            <TableCell>B3</TableCell>
            <TableCell><Link className="hover:underline" href={`https://${analytics?.b3[0].domain}` || ""} >{analytics?.b3[0].domain || ""}</Link></TableCell>
              <TableCell>{analytics?.b3.length}</TableCell>
            </TableRow>
            <TableRow key="6">
            <TableCell>B4</TableCell>
            <TableCell><Link className="hover:underline" href={`https://${analytics?.b4[0].domain}` || ""} >{analytics?.b4[0].domain || ""}</Link></TableCell>
              <TableCell>{analytics?.b4.length}</TableCell>
            </TableRow>
            <TableRow key="7">
            <TableCell>M1</TableCell>
            <TableCell><Link className="hover:underline" href={`https://${analytics?.m1[0].domain}` || ""} >{analytics?.m1[0].domain || ""}</Link></TableCell>
              <TableCell>{analytics?.m1.length}</TableCell>
            </TableRow>
            <TableRow key="8">
            <TableCell>M2</TableCell>
            <TableCell><Link className="hover:underline" href={`https://${analytics?.m2[0].domain}` || ""} >{analytics?.m2[0].domain || ""}</Link></TableCell>
              <TableCell>{analytics?.m2.length}</TableCell>
            </TableRow>
            <TableRow key="9">
            <TableCell>職員</TableCell>
            <TableCell><Link className="hover:underline" href={`https://${analytics?.shokuin[0].domain}` || ""} >{analytics?.shokuin[0].domain || ""}</Link></TableCell>
              <TableCell>{analytics?.shokuin.length}</TableCell>
            </TableRow>
            <TableRow key="10">
            <TableCell>Classroom</TableCell>
            <TableCell><Link className="hover:underline" href={`https://${analytics?.classroom[0].domain}` || ""} >{analytics?.classroom[0].domain || ""}</Link></TableCell>
              <TableCell>{analytics?.classroom.length}</TableCell>
            </TableRow> */}
          </TableBody>
        </Table>
      </main>
    </NextUIProvider>
  )
}

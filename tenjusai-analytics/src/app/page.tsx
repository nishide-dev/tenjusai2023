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
              <TableCell>{analytics?.production[0].domain || ""}</TableCell>
              <TableCell>{analytics?.production.length}</TableCell>
            </TableRow>
            <TableRow key="2">
              <TableCell>開発環境</TableCell>
              <TableCell>{analytics?.development[0].domain || ""}</TableCell>
              <TableCell>{analytics?.development.length}</TableCell>
            </TableRow>
            <TableRow key="3">
              <TableCell>B1</TableCell>
              <TableCell>{analytics?.b1[0].domain || ""}</TableCell>
              <TableCell>{analytics?.b1.length}</TableCell>
            </TableRow>
            <TableRow key="4">
            <TableCell>B2</TableCell>
            <TableCell>{analytics?.b2[0].domain || ""}</TableCell>
              <TableCell>{analytics?.b2.length}</TableCell>
            </TableRow>
            <TableRow key="5">
            <TableCell>B3</TableCell>
            <TableCell>{analytics?.b3[0].domain || ""}</TableCell>
              <TableCell>{analytics?.b3.length}</TableCell>
            </TableRow>
            <TableRow key="6">
            <TableCell>B4</TableCell>
            <TableCell>{analytics?.b4[0].domain || ""}</TableCell>
              <TableCell>{analytics?.b4.length}</TableCell>
            </TableRow>
            <TableRow key="7">
            <TableCell>M1</TableCell>
            <TableCell>{analytics?.m1[0].domain || ""}</TableCell>
              <TableCell>{analytics?.m1.length}</TableCell>
            </TableRow>
            <TableRow key="8">
            <TableCell>M2</TableCell>
            <TableCell>{analytics?.m2[0].domain || ""}</TableCell>
              <TableCell>{analytics?.m2.length}</TableCell>
            </TableRow>
            <TableRow key="9">
            <TableCell>職員</TableCell>
            <TableCell>{analytics?.shokuin[0].domain || ""}</TableCell>
              <TableCell>{analytics?.shokuin.length}</TableCell>
            </TableRow>
            <TableRow key="10">
            <TableCell>Classroom</TableCell>
            <TableCell>{analytics?.classroom[0].domain || ""}</TableCell>
              <TableCell>{analytics?.classroom.length}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </main>
    </NextUIProvider>
  )
}

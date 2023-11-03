import React from 'react';
import {   Button, Table } from '@radix-ui/themes';
import Link from 'next/link';
import prisma from '@/prisma/client';
const IssuePage = async () => {
  const issues = await prisma.issue.findMany();
  return (
    <div className='max-w-4xl'>
    <div>
      <Button><Link href='/issue/new'>Add New Issue</Link></Button>
      </div>
      <div>
      <Table.Root variant='surface'>
  <Table.Header>
    <Table.Row>
      <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell className='hidden md:table-cell'>Status</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell className='hidden md:table-cell'>Created</Table.ColumnHeaderCell>
    </Table.Row>
  </Table.Header>

  <Table.Body>
    {issues.map((issue)=> (
      <Table.Row key={issue.id}>
      <Table.Cell>{issue.title}{' '}
      <div className='block md:hidden my-2'>{issue.status}</div>
      </Table.Cell>
      <Table.Cell className='hidden md:table-cell'>{issue.status}
      </Table.Cell>
      <Table.Cell className='hidden md:table-cell'>{issue.createdAt.toDateString()}</Table.Cell>
    </Table.Row>
    ))}
  </Table.Body>
</Table.Root>
      </div>
    </div>
  )
}

export default IssuePage
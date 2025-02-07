"use client"
 
import { ColumnDef } from "@tanstack/react-table"
 

export type Game = {
  id: number
  rank: number
  name: string
  peak: number
}
 
export const columns: ColumnDef<Game>[] = [
  {
    accessorKey: "rank",
    header: "Rank",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "peak",
    header: "Peak players last 24h",
  },
]
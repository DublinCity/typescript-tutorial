import uuid from "uuid/v4"
import { Cell } from "../models"
import { ICellInstance } from "../models/cell-interface"

const getAllCell = async () => await Cell.findAll({})
const getCellById = async (id: string) =>
  await Cell.findOne({
    where: {
      index: id
    }
  })

const addCell = async ({
  index,
  parentId,
  title
}: {
  index: string
  parentId: string
  title: string
}) =>
  await Cell.create({
    index,
    parentId,
    title,
    childrenId: ""
  })

const editCellById = async (index: string, body: any) => {
  const title: string = body.title
  return await Cell.update(
    {
      title
    },
    {
      where: {
        index
      }
    }
  )
}

export { getAllCell, getCellById, addCell, editCellById }

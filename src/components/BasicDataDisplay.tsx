import BasicKeyValueInfo from '@/components/BasicKeyValueInfo.tsx'
import BasicListInfo from '@/components/BasicListInfo.tsx'

interface IBasicDataDisplay {
  data: string | string[]
  label: string
}
export default function BasicDataDisplay({ data, label }: IBasicDataDisplay) {
  if (Array.isArray(data)) {
    return <BasicListInfo label={label} items={data} />
  }

  return <BasicKeyValueInfo label={label} value={data} />
}

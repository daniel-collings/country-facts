interface IBasicDataDisplay {
  data: string | string[]
  label: string
}
export default function Capital({ data, label }: IBasicDataDisplay) {
  if (Array.isArray(data)) {
    return (
      <div>
        <div>
          <span className="font-bold">{label}</span>
          <ul>
            {data.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div>
        <p className="font-bold">{label}</p>
        <ul>
          <li>{data}</li>
        </ul>
      </div>
    </div>
  )
}

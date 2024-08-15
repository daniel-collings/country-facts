interface IPageHeaderProps {
  title: string
  subtitle?: string
}

export default function PageHeader({ title, subtitle }: IPageHeaderProps) {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-primaryy">{title}</h1>
      {subtitle ? (
        <p data-testid="pageHeaderSubtitle" className="text-xl text-secondary">
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}

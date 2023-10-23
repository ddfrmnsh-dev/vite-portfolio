import { Breadcrumb } from 'flowbite-react';

export interface IBreadcrumbsProps {
    paths: string
}

function Breadcrumbs (props : IBreadcrumbsProps) {
  
    const {paths} = props
    return(
        <>
        <Breadcrumb aria-label="Default breadcrumb example">
            {Array.isArray(paths) && paths.map((path, index) => (
            <Breadcrumb.Item
            href={path.url}
            key={index}
            >
                {path.label}
                {index < paths.length - 1}
            </Breadcrumb.Item>
            ))}
        </Breadcrumb>
        </>
    )
}

export default Breadcrumbs

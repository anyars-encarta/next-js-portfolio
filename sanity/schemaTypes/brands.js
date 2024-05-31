export default {
    name: 'brands',
    title: 'Brands',
    type: 'document',
    fields: [
        {
            name: 'imgUrl',
            title: 'Brand Logo',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'nameImgUrl',
            title: 'Name Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ]
}
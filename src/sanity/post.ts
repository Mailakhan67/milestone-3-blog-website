import {defineType , defineField ,defineArrayMember} from 'sanity'
// import { title } from "process";

export const post= defineType ({
    name : 'post',
    type : 'document',
    title : 'Post',
    fields :[
        defineField ({
            name : 'title',
            type : 'string',
            title : 'Post Title',
            description : 'Title of the Post ',
            
            validation : Rule => Rule.required()
        
        }),
//Slug Field
defineField({
    name : 'slug',
    type : 'slug',
    title : 'Slug',
    options : {
        source : 'title',
        maxLength : 96,
    },
    validation : Rule => Rule.required()
}),
defineField({
    name : 'summary',
    type : 'text',
    title : 'Summary',
    validation : Rule => Rule.required()
}),

defineField({
    name : 'image',
    type : 'image',
    title : 'Image',
}),

defineField({
    name : 'content',
    type : 'array',
    title : 'Content',
    of :[
        defineArrayMember({
            type : 'block',
        })
    ]
}),
defineField({
    name : 'author',
    type : 'reference',
    title : 'Author',
    to : [
        {
            type: 'author'
        }
    ]
}),
    ]
})

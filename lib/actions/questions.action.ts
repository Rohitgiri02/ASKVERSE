"use server"

import Question from "@/database/question.model";
import Tag from "@/database/tag.model";
import { connectdatabase } from "@/lib/mongoose"
interface CreateQuestionParams {
    title: string,
    content: string,
    tags: string[],
    author:String,
    path: string;
  }
export async function Createquestion(params:CreateQuestionParams) {
    try {
        connectdatabase();
        console.log(params)
        const {title,content,tags,author,path} = params;
        const question = await Question.create({
            title,
            content,
            author
        })

        const tagDocument = [];
        for (const tag of tags){
            const existingTag = await Tag.findOneAndUpdate(
                {name:{$regex:new RegExp(`^${tag}$`,"i")}},
                {$setOnInsert:{name:tag},$push:{question:question._id}},
                {upsert:true,new:true}
            )
        tagDocument.push(existingTag._id)
        }

        await Question.findByIdAndUpdate(question._id,{
            $push:{tags:{$each:tagDocument}}
        })
    } catch (error) {
        console.log(error)
    }
}

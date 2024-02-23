"use client"

import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { Dialog, DialogContent, DialogHeader } from "./dialog";

interface ModalProps {
    title: string,
    description: string,
    isopen: boolean,
    onclose: ()=> void,
    children?: React.ReactNode
}

export const Modal: React.FC<ModalProps>=({
    title,
    description,
    isopen,
    onclose,
    children
}) =>{
    const onchange = (open: boolean)=>{
        if(!open){
            onclose()
        }
    }
    return(
        <Dialog open={isopen} onOpenChange={onchange} >
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>{description}</DialogDescription>
                </DialogHeader>
                <div>{children}</div>
            </DialogContent>
        </Dialog>
    )
}
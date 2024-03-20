import {addCommand2} from "./anotherModule";

export const addCommand = async (newCommand: any)=> {
    const command: any = await addCommand2(newCommand);
    if (!command.success) throw new Error('Error on command')
    return command;
}

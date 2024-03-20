import { addCommand } from "./commandsModule";
import { addCommand2 } from "./anotherModule";

jest.mock('./anotherModule', () => ({
    addCommand2: jest.fn()
}));

beforeEach(() => {
    jest.clearAllMocks();
});

describe('addCommand function', () => {
    it('should return the mock command of addCommand2', async () => {
        const mockCommand = {
            success: true,
            test: true
        };
        (addCommand2 as jest.Mock).mockResolvedValue(mockCommand);

        const newCommand: any = {
            //bla: "bla"
        };

        const commandResponse = await addCommand(newCommand);
        await expect(commandResponse).resolves.toEqual(mockCommand);
    });
});

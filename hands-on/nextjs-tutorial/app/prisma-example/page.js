import prisma from "../utils/db";

const prismaHandlers = async () => {
    const allTasks = await prisma.task.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });
    return allTasks;
};

async function PrismaPage() {
    const tasks = await prismaHandlers();

    return (
        <div>
            <h1 className="text-7xl">PrismaExample</h1>
            {tasks.map((task) => {
                return (
                    <h2 key={task.id} className="text-xl py-2">
                        {task.content}
                    </h2>
                );
            })}
        </div>
    );
}

export default PrismaPage;


public class DirectedAcyclicGraph
{
    private int autoincrementer = 0;
    private readonly IList<IList<int>> _nodes;
    private readonly Dictionary<string, int> _availableNodes;
    private readonly Dictionary<int, string> _nodesToTask;
    public DirectedAcyclicGraph()
    {
        _nodes = new List<IList<int>>();
        _availableNodes = new Dictionary<string, int>();
        _nodesToTask = new Dictionary<int, string>();
    }

    public void AddNode(string taskName)
    {
        if (_availableNodes.ContainsKey(taskName)) return;
        _availableNodes.Add(taskName, autoincrementer);
        _nodesToTask.Add(autoincrementer, taskName);
        _nodes.Add(new List<int>());
        autoincrementer++;
    }

    public void AddNodeDependency(string taskName, string taskDepended)
    {
        var dependentNode = _availableNodes[taskName];
        var node = _availableNodes[taskDepended];
        Console.WriteLine(dependentNode + " -> " + node);
        _nodes[dependentNode].Add(node);
    }

    private bool Dfs(Stack<int> stack, int[] visited, int nodeId)
    {
        visited[nodeId] = 1;
        for (int i = 0; i < _nodes[nodeId].Count; i++)
        {
            var node = _nodes[nodeId][i];
            if (visited[node] == 0)
            {
                if (Dfs(stack, visited, node))
                {
                    return true;
                }
            }
            else if (visited[node] == 1)
            {
                return true;
            }
        }
        visited[nodeId] = 2;
        stack.Push(nodeId);
        return false;
    }

    public void RunTopologicalSort()
    {
        //0 for unvisited, 1 for visiting, 2 for done
        int[] visited = new int[_nodes.Count];
        Stack<int> finalResultStack = new Stack<int>();
        for (int i = 0; i < _nodes.Count; i++)
        {
            if (visited[i] == 0)
            {
                if (Dfs(finalResultStack, visited, i))
                {
                    Console.WriteLine("Cycle found!");
                    return;
                }
            }
        }
        while (finalResultStack.Count > 0)
        {
            var taskid = finalResultStack.Pop();
            Console.WriteLine(_nodesToTask[taskid]);
        }
        //print the array in the order to show the list of actions to be done.
    }

    public static RunTopologicalDemo()
    {
        var graph = new DirectedAcyclicGraph();
        graph.AddNode("Get Up");
        graph.AddNode("Brush up");
        graph.AddNode("Flosh the teeth");
        graph.AddNode("Bath");
        graph.AddNode("read books");
        graph.AddNode("Go to Work");
        graph.AddNode("Dress");

        graph.AddNodeDependency("Get Up", "Brush up");
        graph.AddNodeDependency("Brush up", "Flosh the teeth");
        graph.AddNodeDependency("Flosh the teeth", "Bath");
        graph.AddNodeDependency("Bath", "Dress");
        graph.AddNodeDependency("Dress", "Go to Work");

        graph.RunTopologicalSort();
    }
}
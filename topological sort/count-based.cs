//kann's algorithm
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

    public void AddNodeDependency(string taskFrom, string taskTO)
    {
        var node = _availableNodes[taskFrom];
        var dnode = _availableNodes[taskTO];
        Console.WriteLine(node + " -> " + dnode);
        _nodes[node].Add(dnode);
    }

    public void RunTopologicalSort()
    {
        //0 for unvisited, 1 for visiting, 2 for done
        int[] indegreeArr = new int[_nodes.Count];

        for (int i = 0; i < _nodes.Count; i++)
        {
            for (int j = 0; j < _nodes[i].Count; j++)
            {
                indegreeArr[_nodes[i][j]]++;
            }
        }

        Queue<int> queue=new();
        for(int i=0; i<= _nodes.Count; i++)
        {
            if(indegreeArr[i] == 0)
            {
                queue.Enqueue(i);
            }
        }
        List<int> linked = new();
        while(queue.Count > 0)
        {
            var nodeId = queue.Dequeue();
            linked.Add(nodeId);
            foreach(var node in _nodes[nodeId])
            {
                indegreeArr[node]--;
                if(indegreeArr[node] == 0)
                {
                    queue.Enqueue(node);
                }
            }
        }

        if(linked.Count != _nodes.Count)
        {
            Console.WriteLine("Cycle is present");
        }
        else
        {
            Console.WriteLine(string.Join("->", linked.Select(x =>_nodesToTask[x])))   ;
        }
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
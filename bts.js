console.log("welcome")
//node class
class Node
{
    constructor(data)
    {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}


// Binary Search tree class
class BinarySearchTree
{
    constructor()
    {
        
        this.root = null;
    }

insert(data)
{
	
	var newnode = new Node(data);
					
     //when node empty
	if(this.root === null)
		this.root = newnode;
	else
       //add node so invoke 
	this.insertnode(this.root, newnode);
}

insertnode(node, newnode)
{

	if(newnode.data < node.data)
	{

		if(node.left === null)
			node.left = newnode;
		else
          this.insertnode(node.left, newnode);
	}
else
	{
		
		if(node.right === null)
			node.right = newnode;
		else
           this.insertnode(node.right,newnode);
	}
 }
// search data
find(node, data)
{


	if(node == null){
        return false;
    }
		
	else if(data < node.data){
        return this.find(node.left, data);
    }
		
	else if(data > node.data){
        return this.find(node.right, data);
    }
		
	else{
         // console.log(node)
		return true;
    }
 
}
inordrtraversal(node)
{
    if(node !== null)
    {
        //it will give ascending order
        this.inordrtraversal(node.left);
        console.log(node.data);
        this.inordrtraversal(node.right);
    }
}
preorder(node)
{
    if(node !== null)
    {
        console.log("pre-order"+node.data);
        this.preorder(node.left);
        this.preorder(node.right);
    }
}
// Performs postorder traversal of a tree
postorder(node)
{
	if(node !== null)
	{
		this.postorder(node.left);
		this.postorder(node.right);
		console.log("post ordar "+node.data);
	}
}
maxdepth(node){
    if(node==null){
        return -1
    }else{
        var leftheight=this.maxdepth(node.left)
        var rightheight=this.maxdepth(node.right)
        if(leftheight>rightheight){
            return leftheight+1
        }else{
            return rightheight+1
        }
    }
}


}
var BST = new BinarySearchTree();
 
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(23);
BST.insert(24);
BST.insert(21);
BST.insert(22);
BST.insert(28);
console.log(BST.root)
console.log(BST.find(BST.root,100))
BST.inordrtraversal(BST.root)
BST.preorder(BST.root)
BST.postorder(BST.root)
console.log(BST.maxdepth(BST.root))

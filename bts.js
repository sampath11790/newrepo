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



}
var BST = new BinarySearchTree();
 
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(23);
BST.insert(21);
BST.insert(22);
BST.insert(28);
console.log(BST.root)
console.log(BST.find(BST.root,100))

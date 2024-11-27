//Linked List
#include<iostream>
using namespace std;

class node{
	public:
		int val;
		node* next;
		
		node(int value){
			val = value;
			next = NULL;
		}
};

void insertAtEnd(node* &head,int value){
	node* n = new node(value);
	node* temp = head;
	while(temp->next!=NULL){
		temp= temp->next;
	}
	temp->next = n;
}

void insertAtBegining(node* &head,int value){
	node* n = new node(value);
	n->next = head;
	head = n;
}

void display(node* head){
	node* temp = head;
	while(temp!=NULL){
		cout << temp->val << " ";
		temp = temp->next;
	}
}

int main(){
	node* head = NULL;
	insertAtBegining(head,1);
	insertAtEnd(head,2);
	insertAtEnd(head,3);
	insertAtEnd(head,4);
	insertAtEnd(head,5);
	insertAtBegining(head,0);
	display(head);
	return 0;
}

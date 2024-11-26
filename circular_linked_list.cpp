//circular linked list
#include<iostream>
using namespace std;

class node{
	public:
		int val;
		node* next;
		
		node(int a){
			val = a;
			next = nullptr;
		}
};

void insertAtBegining(node* &head,int value){
	node* n = new node(value);
	if(head == nullptr){
		head = n;
		n->next = n;
	}
	else{
		node* temp = head;
		while(temp->next!=head){
			temp = temp->next;
		} 
		temp->next = head;
		n->next = head;
		head = n;
	}
}

void insertAtEnd(node* &head,int value){
	node* n = new node(value);
	node* temp = head;
	while(temp->next!=head){
		temp = temp->next;
	}
	temp->next = n;
	n->next = head;
}

void display(node* &head){
	node* temp = head;
	if(temp!=nullptr){
	while(temp->next!=head){
		cout << temp->val << " ";
		temp = temp->next;
	}
	cout << temp->val;
	}
}

int main(){
	node* head = nullptr;
	insertAtBegining(head,1);
	insertAtEnd(head,2);
	insertAtEnd(head,3);
	insertAtEnd(head,4);
	insertAtEnd(head,5);
	insertAtBegining(head,0);
	display(head);
}

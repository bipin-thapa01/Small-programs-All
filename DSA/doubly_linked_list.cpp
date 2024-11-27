//doubly linked list
#include<iostream>
using namespace std;

class node{
	public:
	int val;
	node* next;
	node* prev;
	
	node(int value){
		val = value;
		next = NULL;
		prev = NULL;
	}
};

void insertAtEnd(node* &head,int value){
	node *n = new node(value);
	
	node* temp = head;
	while(temp->next!=NULL){
		temp = temp->next;
	}
	
	temp->next = n;
	n->prev = temp;
}

void insertAtBegining(node* &head,int value){
	node *n = new node(value);
	n->next = head;
	if(head!=NULL){
		head->prev = n;
	}
	head = n;
}

void deletion(node* &head,int value){
	node* temp = head;
	if(temp == NULL){
		return;
	}
	
	if(temp != NULL && temp->val == value){
		head = temp->next;
		head->prev = NULL;
		delete temp;
		return;
	}
	
	temp = temp->next;
	while(true){
		if(temp!=NULL&&temp->val==value){
			if(temp->next!=NULL){
				temp->prev->next = temp->next;
				temp->next->prev = temp->prev;
			}
			else{
				temp->prev->next = NULL;
			}
			delete temp;
			return;
		}
		temp = temp->next;
	}
}

void display(node* &head){
	node *temp = head;
	while(temp!=NULL){
		cout << temp->val << " ";
		temp = temp->next;
	}
}

int main(){
	node *head = NULL;
	insertAtBegining(head,1);
	insertAtEnd(head,2);
	insertAtEnd(head,3);
	insertAtEnd(head,4);
	insertAtEnd(head,5);
	insertAtBegining(head,0);
	display(head);
	deletion(head,0);
	deletion(head,5);
	cout << endl;
	display(head);
	return 0;
}

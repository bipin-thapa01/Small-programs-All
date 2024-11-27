//linked list with item deletion
#include<iostream>
using namespace std;

class node{
	public:
		int val;
		node* next;
		
		node(int a){
			val = a;
			next = NULL;
		}
};

void insertAtBegining(node* &head,int value){
	node* n = new node(value);
	n->next = head;
	head = n;
}

void insertAtEnd(node* &head,int value){
	node* n = new node(value);
	node* temp = head;
	while(temp->next!=NULL){
		temp = temp->next;
	}
	temp->next = n;
}

void deletion(node* &head,int value){
	node* temp = head;
	if(temp==NULL) return;
	if(temp->val == value){
		head = temp->next;
		delete temp;
		return;
	}
	while (temp->next != NULL) {
        if (temp->next->val == value) {
            node* toDelete = temp->next;  
            temp->next = temp->next->next;
            return;
        }
        temp = temp->next;
    }
}

void display(node* &head){
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
	cout << endl;
	deletion(head,0);
	deletion(head,2);
	deletion(head,5);
	display(head);
	return 0;
}

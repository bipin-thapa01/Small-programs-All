#include<iostream>
#define SIZE 10
int top = -1;
using namespace std;

void push(int s[],int val){
	if(top==SIZE-1){
		cout << "Error! Stack Overflow" << endl;
		return;
	}
	s[++top] = val;
}

int pop(int s[]){
	if(top == -1){
		cout << "Error! Stack Underflow" << endl;
		return 0;
	}
	top--;
}

void display(int s[]){
	if(top == -1){
		cout << "No elements to display" << endl;
	}
	for(int i=top; i>=0; --i){
		cout << s[i] << " ";
	}
	cout << endl;
}

int main(){
	int s[SIZE],choice,val;
	start:
	cout << endl << "MENU" << endl;
	cout << "1. Push" << endl;
	cout << "2. Pop" << endl;
	cout << "3. Display" << endl;
	cout << "4. Exit" << endl;
	cout << "Enter your choice: ";
	cin >> choice;
	switch (choice){
		case 1:
			cout << "Enter your element to be pushed: ";
			cin >> val;
			push(s,val);
		break;
		case 2:
			cout << "The element at top is poped" << endl;
			pop(s);
		break;
		case 3:
			cout << "Elements in stack: " << endl;
			display(s);
		break;
		case 4:
			cout << endl << "Thanks for trying!";
			return 0;
		break;
	}
	goto start;
}

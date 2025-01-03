//stack implementation using cpp
#include<iostream>
#define SIZE 10
using namespace std;

class stack{
	int top = -1, s[SIZE];
	public:
		void push(int val){
			if(top==SIZE-1){
				cout << "Error! Stack Overflow";
				return;
			}
			s[++top] = val;
		}
		int pop(){
			if(top==-1){
				cout << "Error! Stack Underflow";
				return 0;
			}
			top--;
			return s[top+1];
		}
		void display(){
			for(int i=top; i>=0; i--){
				cout << s[i] << " ";
			}
		}
};

int main(){
	int temp;
	stack s;
	s.push(0);
	s.push(1);
	s.push(2);
	s.push(3);
	s.push(4);
	s.push(5);
	s.display();
	temp = s.pop();
	temp = s.pop();
	temp = s.pop();
	cout << endl;
	s.display();
	return 0;
}

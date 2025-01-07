#include<iostream>
#include<stack>
#include<string>
using namespace std;

stack<int> s;

int main(){
	string a;
	int n1, n2, ans;
	cout << "Enter a string in prefix: ";
	getline(cin,a);
	for(int i = a.length()-1; i >= 0; --i){
		if(a[i] >=48 && a[i]<= 57){
			s.push(a[i] - '0'); 
		}
		else{
			n1 = s.top();
			s.pop();
			n2 = s.top();
			s.pop();
			if(a[i] == '+'){
				ans = n1 + n2;
			}
			else if(a[i] == '-'){
				ans = n1 - n2;
			}
			else if(a[i] == '*'){
				ans = n1 * n2;
			}
			else if(a[i] == '/'){
				ans = n1 / n2;
			}
			s.push(ans);
		}
	}
	cout << "Ans: " << s.top();
	return 0;
}

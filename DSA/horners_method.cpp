#include<iostream>
using namespace std;

int main(){
	int n, ans, x;
	cout << "Enter the degree of polynomial: ";
	cin >> n;
	cout << "Enter the value of x: ";
	cin >> x;
	int *p = new int[n+1];
	for(int i=0; i<=n; i++){
		cout << "Enter " << n-i << " coefficient: ";
		cin >> *(p+i);
	}
	ans = *(p);
	for(int i = 1; i<=n; i++){
		ans = *(p+i) + x*ans;
	}
	cout << "Solution of polynomial at " << x << " is: " << ans;
	delete[] p;
	return 0;
}

#include<iostream>
using namespace std;

void merge(int A[],int l,int m,int r){
	int B[r+1];
	int x = l;
	int y = m;
	int k = l;
	while(x<m&&y<=r){
		if(A[x]<A[y]){
			B[k] = A[x];
			x++;
			k++;
		}
		else{
			B[k] = A[y];
			y++;
			k++;
		}
	}
	while(x<m){
		B[k] = A[x];
		k++;
		x++;
	}
	while(y<=r){
		B[k] = A[y];
		k++;
		y++;
	}
	for(int i=l;i<=r;i++){
		A[i] = B[i];
	}
}

void mergeSort(int A[],int l,int r){
	if(l<r){
		int mid = (l+r)/2;
		mergeSort(A,l,mid);
		mergeSort(A,mid+1,r);
		merge(A,l,mid+1,r);
	}
}

int main(){
	int A[] = {4,3,7,6,1,0,11,22,-2,-1};
	mergeSort(A,0,9);
	for(int i=0; i<10; i++){
		cout << A[i] << " ";
	}
	return 0;
}

class Solution {
    int solve(int row , int col , int m , int n , List<List<Integer>> triangle ,int[][] dp)
    {
        if(row == m-1 && col == n - 1)
        {
            return triangle.get(m-1).get(n-1);
        }
       
        if(dp[row][col] != -1)
            return dp[row][col];

        int down = triangle.get(row).get(col)+solve(row+1 , col , m ,n ,triangle, dp);
        int nextDown = triangle.get(row).get(col)+solve(row+1 , col+1 , m ,n ,triangle, dp);

        return dp[row][col] = Math.min(down,nextDown );

    }
    //Tabulation
    int solveTab( int m , int n , List<List<Integer>> triangle ,int[][] dp)
    {
        for (int j = 0; j < n; j++) {
            dp[m - 1][j] = triangle.get(m - 1).get(j);
        }
        for(int i = m-1 ; i >= 0 ; i--)
        {
            for(int j = i ; j >= 0;  j--)
            {
                
                int down =  triangle.get(i).get(j)+dp[i+1][j]; 
                int nextDown = triangle.get(i).get(j)+ dp[i+1][j+1];

                dp[i][j] = Math.min(down,nextDown );                                
            }

        }
            
        
        
        return dp[0][0];

    }
    public int minimumTotal(List<List<Integer>> triangle) {
        int m = triangle.size();
        int n = triangle.get(m-1).size();
        int[][] dp = new int[m+1][n+1];
        for(int i = 0 ; i < m ; i++)
        {
           Arrays.fill(dp[i] , -1);
        }

        //  return solve(0 , 0 , m , n ,triangle, dp); 
         return solveTab( m , n ,triangle, dp); 

    }
}

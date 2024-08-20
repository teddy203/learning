class Students:
    def __init__(self, pPosition, pName, pPay):
        self.position = pPosition
        self.name = pName
        self.pay = pPay
        
        print("Creating staff object")
        
    def __str__(self):
        return "Postion = %s, Name = %s, Pay = %d"%(self.position, self.name, self.pay)
    
    def calculatePay(self):
        hours = input('\nEnter number of hours worked for %s:'%(self.name))
        hourlyRate = input('Enter the hourly rating for %s:'%(self.name))
        self.pay = int(hours) * int(hourlyRate)
        return self.pay
        
        
staff1 = Students('CEO','Joan', 650000)

staff1.calculatePay()

print('$',staff1.pay)

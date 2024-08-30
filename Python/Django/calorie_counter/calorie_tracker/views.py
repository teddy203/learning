from django.shortcuts import render,redirect
from .models import FoodItem 

def add_food_item(request):
    if request.method == 'POST':
        name = request.POST['name']
        calories = int(request.POST['calories'])
        FoodItem.objects.create(name=name, calories=calories)
        return redirect('view_food_items')
    return render(request, 'add_food_item.html')

def view_food_items(request):
    food_items = FoodItem.objects.all()
    total_calories = sum(item.calories for item in food_items)
    return render(request, 'view_food_items.html', {'food_items': food_items, 'total_calories': total_calories})

def remove_food_item(request, item_id):
    FoodItem.objects.filter(id=item_id).delete()
    return redirect('view_food_items')

def reset_calories(request):
    FoodItem.objects.all().delete()
    return redirect('view_food_items')
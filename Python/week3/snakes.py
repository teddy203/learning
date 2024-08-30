import random


ladders = {3: 22, 5: 8, 11: 26, 20: 29}
snakes = {27: 1, 21: 9, 23: 15, 25: 5, 34: 10}


def roll_dice():
    return random.randint(1, 6)


def get_position(player, current_position):
    if current_position in ladders:
        print(f"{player} climbed a ladder from {current_position} to {ladders[current_position]}!")
        return ladders[current_position]
    elif current_position in snakes:
        print(f"{player} was bitten by a snake from {current_position} to {snakes[current_position]}!")
        return snakes[current_position]
    return current_position


def player_turn(player, position):
    input(f"{player}, press Enter to roll the dice...")
    dice_value = roll_dice()
    print(f"{player} rolled a {dice_value}.")

    new_position = position + dice_value
    print(f"{player} moves from {position} to {new_position}.")

    
    final_position = get_position(player, new_position)
    print(f"{player}'s new position is {final_position}.")
    return final_position


def play():
    print("Welcome to Snake and Ladder Game!")
    print("Version: 1.0.0  *Feel Free to use anything*")
    print("Rules:")
    print("1. Initially all the players are at starting position i.e. 0.")
    print("   Take it in turns to roll the dice.")
    print("   Move forward the number of spaces shown on the dice.")
    print("2. If you land at the bottom of a ladder, you can move up to the top of the ladder.")
    print("3. If you land on the head of a snake, you must slide down to the bottom of the snake.")
    print("4. The first player to get to the FINAL position (>= 30) is the winner.")
    print("5. Hit enter to roll the dice.")
    print("6. Sign up the number of players (between 1 to 4) and names to begin.")

   
    num_players = int(input("Enter number of players (1-4): "))
    while num_players < 1 or num_players > 4:
        num_players = int(input("Please enter a valid number of players (1-4): "))

    
    players = []
    for i in range(num_players):
        player_name = input(f"Enter name for Player {i+1}: ")
        players.append(player_name)

    
    positions = {player: 0 for player in players}

    
    while True:
        for player in players:
            
            positions[player] = player_turn(player, positions[player])
            if positions[player] >= 30:
                print(f"Congratulations {player}! You have won the game!")
                return

play()

import json
import os

def validate_plans(file_path):
    if not os.path.exists(file_path):
        print(f"Error: {file_path} not found.")
        return False
    
    try:
        with open(file_path, 'r') as f:
            data = json.load(f)
            
        # Basic schema validation
        if "plans" not in data:
            print("Error: 'plans' key missing.")
            return False
            
        for plan in data["plans"]:
            required = ["id", "name", "speed_mbps", "price_monthly"]
            for field in required:
                if field not in plan:
                    print(f"Error: Plan {plan.get('id', 'unknown')} missing field '{field}'.")
                    return False
        
        print("Success: Data schema is valid.")
        return True
    except Exception as e:
        print(f"Error: {str(e)}")
        return False

if __name__ == "__main__":
    validate_plans("lib/data/plans.json")

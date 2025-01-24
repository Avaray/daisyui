import json
import os

# Path to the directory containing the JSON files
directory = '.'

# Load the base English file
base_file = os.path.join(directory, 'en.json')
with open(base_file, 'r', encoding='utf-8') as f:
    base_data = json.load(f)

# Iterate over all files in the directory
for filename in os.listdir(directory):
    if filename.endswith('.json') and filename != 'en.json':
        file_path = os.path.join(directory, filename)
        
        # Load the translation file
        with open(file_path, 'r', encoding='utf-8') as f:
            translation_data = json.load(f)
        
        # Calculate the number of keys that are different from the base file
        total_keys = 0
        different_keys = 0
        
        for key, value in base_data.items():
            if key.startswith('__'):  # Skip metadata keys
                continue
            total_keys += 1
            if key not in translation_data or translation_data[key] == value:
                different_keys += 1
        
        # Calculate the percentage of keys that are different
        if total_keys > 0:
            percentage_different = (different_keys / total_keys) * 100
        else:
            percentage_different = 0
        
        # Update the __status field in the translation file
        translation_data['__status'] = f"{100 - percentage_different:.0f}%"
        
        # Save the updated translation file with LF line endings and an empty line at the end
        with open(file_path, 'w', encoding='utf-8', newline='\n') as f:
            json.dump(translation_data, f, ensure_ascii=False, indent=2)
            f.write('\n')  # Add an empty line at the end
        
        print(f"Updated {filename} with status: {translation_data['__status']}")

print("All files have been updated.")

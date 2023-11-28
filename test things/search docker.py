import requests

def search_docker_hub(term, page=1, page_size=5):
    url = f'https://hub.docker.com/v2/search/repositories/?query={term}&page={page}&page_size={page_size}'
    
    try:
        response = requests.get(url)
        response.raise_for_status()  # Raise an exception for 4xx and 5xx status codes

        result_data = response.json()
        results = result_data.get('results', [])
        
        # Check if there are more pages and fetch additional results
        # if result_data.get('next'):
        #     next_page_results = search_docker_hub(term, page=page + 1, page_size=page_size)
        #     results.extend(next_page_results)

        return results

    except requests.exceptions.RequestException as e:
        print(f"Error: {e}")
        return []

# Example: Search for Docker images with the term "python" and fetch more images
search_term = "python"
result_images = search_docker_hub(search_term, page_size=20)  # Increase page_size for more results

for image in result_images:
    print(image)

import json
import uuid
from datetime import date

if __name__ == '__main__':
    BLOGS_JSON_PATH = r'src\pages\blog\Blogs.json'
    DESTINATION_PATH = r'public'

    f = open(BLOGS_JSON_PATH)
    blog_data = json.load(f)
    subject_dict = {}
    for i in range(len(blog_data)):
        subject_dict[i] = blog_data[i]['subject']

    subjects = ''
    result = {}
    i = 1
    for key, value in subject_dict.items():
        if value not in result.values():
            subjects += '{}-{}\n'.format(i, value)
            result[i] = value
            i += 1

    id = str(uuid.uuid4())
    blog_name = input('Name of blog: ')

    subject = ''
    while subject == '':
        try:
            selection = input('Blog Type:\n{}'.format(subjects))
            subject = result[int(selection)]
        except (KeyError, ValueError):
            print('Invalid selection, please try again.')

    path_route = "/{}/{}.md".format("blog_markdowns", 
        blog_name.replace(' ', '_').lower())
    today = date.today().strftime('%x')

    blog_data.insert(0, {
        "id": id,
        "title": blog_name,
        "subject": subject,
        "pathRoute": path_route,
        "date": today
    })

    json_object = json.dumps(blog_data, indent=4)
    with open(BLOGS_JSON_PATH, 'w') as f:
        f.write(json_object)

    with open("{}{}".format(DESTINATION_PATH, path_route), 'w') as f:
        f.write('')
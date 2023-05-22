s1 = "<ul>"
s2 = "</ul>"
lst ="\n".join([f"<li><a href='#'>{i}</a></li>" for i in range(1,10)])
print(s1+lst+s2)
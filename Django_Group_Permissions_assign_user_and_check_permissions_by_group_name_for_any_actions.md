<pre>(venv) <font color="#4E9A06"><b>rafiq@rafiq</b></font>:<font color="#3465A4"><b>~/Rafiq/21-01-2022/django_docker</b></font>$ python manage.py shell
Python 3.8.10 (default, Nov 26 2021, 20:14:08) 
[GCC 9.3.0] on linux
Type &quot;help&quot;, &quot;copyright&quot;, &quot;credits&quot; or &quot;license&quot; for more information.
(InteractiveConsole)
&gt;&gt;&gt; from django.contrib.auth.models import User, Group, Permission
&gt;&gt;&gt; user = User.objects.get(id=1)
&gt;&gt;&gt; user
&lt;User: rafiq&gt;
&gt;&gt;&gt; permission = Permission.objects.all()
&gt;&gt;&gt; permission
&lt;QuerySet [&lt;Permission: admin | log entry | Can add log entry&gt;, &lt;Permission: admin | log entry | Can change log entry&gt;, &lt;Permission: admin | log entry | Can delete log entry&gt;, &lt;Permission: admin | log entry | Can view log entry&gt;, &lt;Permission: auth | group | Can add group&gt;, &lt;Permission: auth | group | Can change group&gt;, &lt;Permission: auth | group | Can delete group&gt;, &lt;Permission: auth | group | Can view group&gt;, &lt;Permission: auth | permission | Can add permission&gt;, &lt;Permission: auth | permission | Can change permission&gt;, &lt;Permission: auth | permission | Can delete permission&gt;, &lt;Permission: auth | permission | Can view permission&gt;, &lt;Permission: auth | user | Can add user&gt;, &lt;Permission: auth | user | Can change user&gt;, &lt;Permission: auth | user | Can delete user&gt;, &lt;Permission: auth | user | Can view user&gt;, &lt;Permission: authtoken | Token | Can add Token&gt;, &lt;Permission: authtoken | Token | Can change Token&gt;, &lt;Permission: authtoken | Token | Can delete Token&gt;, &lt;Permission: authtoken | Token | Can view Token&gt;, &apos;...(remaining elements truncated)...&apos;]&gt;
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; groups
&gt;&gt;&gt; permission
&lt;QuerySet [&lt;Permission: admin | log entry | Can add log entry&gt;, &lt;Permission: admin | log entry | Can change log entry&gt;, &lt;Permission: admin | log entry | Can delete log entry&gt;, &lt;Permission: admin | log entry | Can view log entry&gt;, &lt;Permission: auth | group | Can add group&gt;, &lt;Permission: auth | group | Can change group&gt;, &lt;Permission: auth | group | Can delete group&gt;, &lt;Permission: auth | group | Can view group&gt;, &lt;Permission: auth | permission | Can add permission&gt;, &lt;Permission: auth | permission | Can change permission&gt;, &lt;Permission: auth | permission | Can delete permission&gt;, &lt;Permission: auth | permission | Can view permission&gt;, &lt;Permission: auth | user | Can add user&gt;, &lt;Permission: auth | user | Can change user&gt;, &lt;Permission: auth | user | Can delete user&gt;, &lt;Permission: auth | user | Can view user&gt;, &lt;Permission: authtoken | Token | Can add Token&gt;, &lt;Permission: authtoken | Token | Can change Token&gt;, &lt;Permission: authtoken | Token | Can delete Token&gt;, &lt;Permission: authtoken | Token | Can view Token&gt;, &apos;...(remaining elements truncated)...&apos;]&gt;

&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; permission[0]
&lt;Permission: admin | log entry | Can add log entry&gt;
&gt;&gt;&gt; permission[0].id
1
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt;  
&gt;&gt;&gt; permission[0].__dict__
{&apos;_state&apos;: &lt;django.db.models.base.ModelState object at 0x7fda86ec1ca0&gt;, &apos;id&apos;: 1, &apos;name&apos;: &apos;Can add log entry&apos;, &apos;content_type_id&apos;: 1, &apos;codename&apos;: &apos;add_logentry&apos;}
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; for i in permission:
...     # print(i)
... 
admin | log entry | Can add log entry
admin | log entry | Can change log entry
admin | log entry | Can delete log entry
admin | log entry | Can view log entry
auth | group | Can add group
auth | group | Can change group
auth | group | Can delete group
auth | group | Can view group
auth | permission | Can add permission
auth | permission | Can change permission
auth | permission | Can delete permission
auth | permission | Can view permission
auth | user | Can add user
auth | user | Can change user
auth | user | Can delete user
auth | user | Can view user
authtoken | Token | Can add Token
authtoken | Token | Can change Token
authtoken | Token | Can delete Token
authtoken | Token | Can view Token
authtoken | token | Can add token
authtoken | token | Can change token
authtoken | token | Can delete token
authtoken | token | Can view token
contenttypes | content type | Can add content type
contenttypes | content type | Can change content type
contenttypes | content type | Can delete content type
contenttypes | content type | Can view content type
sessions | session | Can add session
sessions | session | Can change session
sessions | session | Can delete session
sessions | session | Can view session
testapp | todo | Can add todo
testapp | todo | Can change todo
testapp | todo | Can delete todo
testapp | todo | Can view todo
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 

&gt;&gt;&gt; for i in permission:
...     # print(i.__dict__)
... 
{&apos;_state&apos;: &lt;django.db.models.base.ModelState object at 0x7fda86ec1fa0&gt;, &apos;id&apos;: 1, &apos;name&apos;: &apos;Can add log entry&apos;, &apos;content_type_id&apos;: 1, &apos;codename&apos;: &apos;add_logentry&apos;}
{&apos;_state&apos;: &lt;django.db.models.base.ModelState object at 0x7fda86ec14f0&gt;, &apos;id&apos;: 2, &apos;name&apos;: &apos;Can change log entry&apos;, &apos;content_type_id&apos;: 1, &apos;codename&apos;: &apos;change_logentry&apos;}
{&apos;_state&apos;: &lt;django.db.models.base.ModelState object at 0x7fda86ec1610&gt;, &apos;id&apos;: 3, &apos;name&apos;: &apos;Can delete log entry&apos;, &apos;content_type_id&apos;: 1, &apos;codename&apos;: &apos;delete_logentry&apos;}
{&apos;_state&apos;: &lt;django.db.models.base.ModelState object at 0x7fda86ec1eb0&gt;, &apos;id&apos;: 4, &apos;name&apos;: &apos;Can view log entry&apos;, &apos;content_type_id&apos;: 1, &apos;codename&apos;: &apos;view_logentry&apos;}
{&apos;_state&apos;: &lt;django.db.models.base.ModelState object at 0x7fda86ec14c0&gt;, &apos;id&apos;: 9, &apos;name&apos;: &apos;Can add group&apos;, &apos;content_type_id&apos;: 3, &apos;codename&apos;: &apos;add_group&apos;}
{&apos;_state&apos;: &lt;django.db.models.base.ModelState object at 0x7fda86ec1640&gt;, &apos;id&apos;: 10, &apos;name&apos;: &apos;Can change group&apos;, &apos;content_type_id&apos;: 3, &apos;codename&apos;: &apos;change_group&apos;}
{&apos;_state&apos;: &lt;django.db.models.base.ModelState object at 0x7fda86ec1700&gt;, &apos;id&apos;: 11, &apos;name&apos;: &apos;Can delete group&apos;, &apos;content_type_id&apos;: 3, &apos;codename&apos;: &apos;delete_group&apos;}
{&apos;_state&apos;: &lt;django.db.models.base.ModelState object at 0x7fda86ec1790&gt;, &apos;id&apos;: 12, &apos;name&apos;: &apos;Can view group&apos;, &apos;content_type_id&apos;: 3, &apos;codename&apos;: &apos;view_group&apos;}
{&apos;_state&apos;: &lt;django.db.models.base.ModelState object at 0x7fda86ec1820&gt;, &apos;id&apos;: 5, &apos;name&apos;: &apos;Can add permission&apos;, &apos;content_type_id&apos;: 2, &apos;codename&apos;: &apos;add_permission&apos;}
{&apos;_state&apos;: &lt;django.db.models.base.ModelState object at 0x7fda86ec1970&gt;, &apos;id&apos;: 6, &apos;name&apos;: &apos;Can change permission&apos;, &apos;content_type_id&apos;: 2, &apos;codename&apos;: &apos;change_permission&apos;}
{&apos;_state&apos;: &lt;django.db.models.base.ModelState object at 0x7fda86ec1a00&gt;, &apos;id&apos;: 7, &apos;name&apos;: &apos;Can delete permission&apos;, &apos;content_type_id&apos;: 2, &apos;codename&apos;: &apos;delete_permission&apos;}
{&apos;_state&apos;: &lt;django.db.models.base.ModelState object at 0x7fda86ec1a30&gt;, &apos;id&apos;: 8, &apos;name&apos;: &apos;Can view permission&apos;, &apos;content_type_id&apos;: 2, &apos;codename&apos;: &apos;view_permission&apos;}
{&apos;_state&apos;: &lt;django.db.models.base.ModelState object at 0x7fda86ec1a60&gt;, &apos;id&apos;: 13, &apos;name&apos;: &apos;Can add user&apos;, &apos;content_type_id&apos;: 4, &apos;codename&apos;: &apos;add_user&apos;}
{&apos;_state&apos;: &lt;django.db.models.base.ModelState object at 0x7fda86ec1af0&gt;, &apos;id&apos;: 14, &apos;name&apos;: &apos;Can change user&apos;, &apos;content_type_id&apos;: 4, &apos;codename&apos;: &apos;change_user&apos;}
{&apos;_state&apos;: &lt;django.db.models.base.ModelState object at 0x7fda86ec1b80&gt;, &apos;id&apos;: 15, &apos;name&apos;: &apos;Can delete user&apos;, &apos;content_type_id&apos;: 4, &apos;codename&apos;: &apos;delete_user&apos;}
{&apos;_state&apos;: &lt;django.db.models.base.ModelState object at 0x7fda86ec1490&gt;, &apos;id&apos;: 16, &apos;name&apos;: &apos;Can view user&apos;, &apos;content_type_id&apos;: 4, &apos;codename&apos;: &apos;view_user&apos;}
{&apos;_state&apos;: &lt;django.db.models.base.ModelState object at 0x7fda86ec1c10&gt;, &apos;id&apos;: 29, &apos;name&apos;: &apos;Can add Token&apos;, &apos;content_type_id&apos;: 8, &apos;codename&apos;: &apos;add_token&apos;}
{&apos;_state&apos;: &lt;django.db.models.base.ModelState object at 0x7fda86ec1cd0&gt;, &apos;id&apos;: 30, &apos;name&apos;: &apos;Can change Token&apos;, &apos;content_type_id&apos;: 8, &apos;codename&apos;: &apos;change_token&apos;}
{&apos;_state&apos;: &lt;django.db.models.base.ModelState object at 0x7fda86ec15e0&gt;, &apos;id&apos;: 31, &apos;name&apos;: &apos;Can delete Token&apos;, &apos;content_type_id&apos;: 8, &apos;codename&apos;: &apos;delete_token&apos;}
{&apos;_state&apos;: &lt;django.db.models.base.ModelState object at 0x7fda86ec1e80&gt;, &apos;id&apos;: 32, &apos;name&apos;: &apos;Can view Token&apos;, &apos;content_type_id&apos;: 8, &apos;codename&apos;: &apos;view_token&apos;}
{&apos;_state&apos;: &lt;django.db.models.base.ModelState object at 0x7fda86e590a0&gt;, &apos;id&apos;: 33, &apos;name&apos;: &apos;Can add token&apos;, &apos;content_type_id&apos;: 9, &apos;codename&apos;: &apos;add_tokenproxy&apos;}
{&apos;_state&apos;: &lt;django.db.models.base.ModelState object at 0x7fda86e59130&gt;, &apos;id&apos;: 34, &apos;name&apos;: &apos;Can change token&apos;, &apos;content_type_id&apos;: 9, &apos;codename&apos;: &apos;change_tokenproxy&apos;}
{&apos;_state&apos;: &lt;django.db.models.base.ModelState object at 0x7fda86e591c0&gt;, &apos;id&apos;: 35, &apos;name&apos;: &apos;Can delete token&apos;, &apos;content_type_id&apos;: 9, &apos;codename&apos;: &apos;delete_tokenproxy&apos;}
{&apos;_state&apos;: &lt;django.db.models.base.ModelState object at 0x7fda86e59250&gt;, &apos;id&apos;: 36, &apos;name&apos;: &apos;Can view token&apos;, &apos;content_type_id&apos;: 9, &apos;codename&apos;: &apos;view_tokenproxy&apos;}
{&apos;_state&apos;: &lt;django.db.models.base.ModelState object at 0x7fda86e592e0&gt;, &apos;id&apos;: 17, &apos;name&apos;: &apos;Can add content type&apos;, &apos;content_type_id&apos;: 5, &apos;codename&apos;: &apos;add_contenttype&apos;}
{&apos;_state&apos;: &lt;django.db.models.base.ModelState object at 0x7fda86e59370&gt;, &apos;id&apos;: 18, &apos;name&apos;: &apos;Can change content type&apos;, &apos;content_type_id&apos;: 5, &apos;codename&apos;: &apos;change_contenttype&apos;}
{&apos;_state&apos;: &lt;django.db.models.base.ModelState object at 0x7fda86e59400&gt;, &apos;id&apos;: 19, &apos;name&apos;: &apos;Can delete content type&apos;, &apos;content_type_id&apos;: 5, &apos;codename&apos;: &apos;delete_contenttype&apos;}
{&apos;_state&apos;: &lt;django.db.models.base.ModelState object at 0x7fda86e59490&gt;, &apos;id&apos;: 20, &apos;name&apos;: &apos;Can view content type&apos;, &apos;content_type_id&apos;: 5, &apos;codename&apos;: &apos;view_contenttype&apos;}
{&apos;_state&apos;: &lt;django.db.models.base.ModelState object at 0x7fda86e59520&gt;, &apos;id&apos;: 21, &apos;name&apos;: &apos;Can add session&apos;, &apos;content_type_id&apos;: 6, &apos;codename&apos;: &apos;add_session&apos;}
{&apos;_state&apos;: &lt;django.db.models.base.ModelState object at 0x7fda86e595b0&gt;, &apos;id&apos;: 22, &apos;name&apos;: &apos;Can change session&apos;, &apos;content_type_id&apos;: 6, &apos;codename&apos;: &apos;change_session&apos;}
{&apos;_state&apos;: &lt;django.db.models.base.ModelState object at 0x7fda86e59640&gt;, &apos;id&apos;: 23, &apos;name&apos;: &apos;Can delete session&apos;, &apos;content_type_id&apos;: 6, &apos;codename&apos;: &apos;delete_session&apos;}
{&apos;_state&apos;: &lt;django.db.models.base.ModelState object at 0x7fda86e596d0&gt;, &apos;id&apos;: 24, &apos;name&apos;: &apos;Can view session&apos;, &apos;content_type_id&apos;: 6, &apos;codename&apos;: &apos;view_session&apos;}
{&apos;_state&apos;: &lt;django.db.models.base.ModelState object at 0x7fda86e59760&gt;, &apos;id&apos;: 25, &apos;name&apos;: &apos;Can add todo&apos;, &apos;content_type_id&apos;: 7, &apos;codename&apos;: &apos;add_todo&apos;}
{&apos;_state&apos;: &lt;django.db.models.base.ModelState object at 0x7fda86e597f0&gt;, &apos;id&apos;: 26, &apos;name&apos;: &apos;Can change todo&apos;, &apos;content_type_id&apos;: 7, &apos;codename&apos;: &apos;change_todo&apos;}
{&apos;_state&apos;: &lt;django.db.models.base.ModelState object at 0x7fda86e59880&gt;, &apos;id&apos;: 27, &apos;name&apos;: &apos;Can delete todo&apos;, &apos;content_type_id&apos;: 7, &apos;codename&apos;: &apos;delete_todo&apos;}
{&apos;_state&apos;: &lt;django.db.models.base.ModelState object at 0x7fda86e59910&gt;, &apos;id&apos;: 28, &apos;name&apos;: &apos;Can view todo&apos;, &apos;content_type_id&apos;: 7, &apos;codename&apos;: &apos;view_todo&apos;}
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; user
&lt;User: rafiq&gt;
&gt;&gt;&gt; user.__dict__
{&apos;_state&apos;: &lt;django.db.models.base.ModelState object at 0x7fda86ea4fd0&gt;, &apos;id&apos;: 1, &apos;password&apos;: &apos;pbkdf2_sha256$260000$hpbVRxIxjoWLLqWagqtZxy$3N1k2EHB7UnWnQGCD101BhpgaVdWqCxBYI1vW1flLqw=&apos;, &apos;last_login&apos;: datetime.datetime(2022, 1, 23, 4, 33, 51, 802250, tzinfo=&lt;UTC&gt;), &apos;is_superuser&apos;: True, &apos;username&apos;: &apos;rafiq&apos;, &apos;first_name&apos;: &apos;&apos;, &apos;last_name&apos;: &apos;&apos;, &apos;email&apos;: &apos;codewithrafiq@gmail.com&apos;, &apos;is_staff&apos;: True, &apos;is_active&apos;: True, &apos;date_joined&apos;: datetime.datetime(2021, 11, 28, 7, 29, 39, 683615, tzinfo=&lt;UTC&gt;)}
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; permission[0].__dict__
{&apos;_state&apos;: &lt;django.db.models.base.ModelState object at 0x7fda86ec1fa0&gt;, &apos;id&apos;: 1, &apos;name&apos;: &apos;Can add log entry&apos;, &apos;content_type_id&apos;: 1, &apos;codename&apos;: &apos;add_logentry&apos;}
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; Group.objects.all()
&lt;QuerySet []&gt;
&gt;&gt;&gt; Group.objects.all().__dict__
{&apos;model&apos;: &lt;class &apos;django.contrib.auth.models.Group&apos;&gt;, &apos;_db&apos;: None, &apos;_hints&apos;: {}, &apos;_query&apos;: &lt;django.db.models.sql.query.Query object at 0x7fda86e59a60&gt;, &apos;_result_cache&apos;: None, &apos;_sticky_filter&apos;: False, &apos;_for_write&apos;: False, &apos;_prefetch_related_lookups&apos;: (), &apos;_prefetch_done&apos;: False, &apos;_known_related_objects&apos;: {}, &apos;_iterable_class&apos;: &lt;class &apos;django.db.models.query.ModelIterable&apos;&gt;, &apos;_fields&apos;: None, &apos;_defer_next_filter&apos;: False, &apos;_deferred_filter&apos;: None}
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; Group._meta.fields
(&lt;django.db.models.fields.AutoField: id&gt;, &lt;django.db.models.fields.CharField: name&gt;)
&gt;&gt;&gt; # print(Group._meta.fields)
(&lt;django.db.models.fields.AutoField: id&gt;, &lt;django.db.models.fields.CharField: name&gt;)
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; str(Group._meta.fields)
&apos;(&lt;django.db.models.fields.AutoField: id&gt;, &lt;django.db.models.fields.CharField: name&gt;)&apos;

&gt;&gt;&gt; [str(i).split(&quot;:&quot;) for i in str(Group._meta.fields)]
[[&apos;(&apos;], [&apos;&lt;&apos;], [&apos;d&apos;], [&apos;j&apos;], [&apos;a&apos;], [&apos;n&apos;], [&apos;g&apos;], [&apos;o&apos;], [&apos;.&apos;], [&apos;d&apos;], [&apos;b&apos;], [&apos;.&apos;], [&apos;m&apos;], [&apos;o&apos;], [&apos;d&apos;], [&apos;e&apos;], [&apos;l&apos;], [&apos;s&apos;], [&apos;.&apos;], [&apos;f&apos;], [&apos;i&apos;], [&apos;e&apos;], [&apos;l&apos;], [&apos;d&apos;], [&apos;s&apos;], [&apos;.&apos;], [&apos;A&apos;], [&apos;u&apos;], [&apos;t&apos;], [&apos;o&apos;], [&apos;F&apos;], [&apos;i&apos;], [&apos;e&apos;], [&apos;l&apos;], [&apos;d&apos;], [&apos;&apos;, &apos;&apos;], [&apos; &apos;], [&apos;i&apos;], [&apos;d&apos;], [&apos;&gt;&apos;], [&apos;,&apos;], [&apos; &apos;], [&apos;&lt;&apos;], [&apos;d&apos;], [&apos;j&apos;], [&apos;a&apos;], [&apos;n&apos;], [&apos;g&apos;], [&apos;o&apos;], [&apos;.&apos;], [&apos;d&apos;], [&apos;b&apos;], [&apos;.&apos;], [&apos;m&apos;], [&apos;o&apos;], [&apos;d&apos;], [&apos;e&apos;], [&apos;l&apos;], [&apos;s&apos;], [&apos;.&apos;], [&apos;f&apos;], [&apos;i&apos;], [&apos;e&apos;], [&apos;l&apos;], [&apos;d&apos;], [&apos;s&apos;], [&apos;.&apos;], [&apos;C&apos;], [&apos;h&apos;], [&apos;a&apos;], [&apos;r&apos;], [&apos;F&apos;], [&apos;i&apos;], [&apos;e&apos;], [&apos;l&apos;], [&apos;d&apos;], [&apos;&apos;, &apos;&apos;], [&apos; &apos;], [&apos;n&apos;], [&apos;a&apos;], [&apos;m&apos;], [&apos;e&apos;], [&apos;&gt;&apos;], [&apos;)&apos;]]
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; [str(i).split(&quot;:&quot;) for i in Group._meta.fields]
[[&apos;auth.Group.id&apos;], [&apos;auth.Group.name&apos;]]
&gt;&gt;&gt; [i for i in Group._meta.fields]
[&lt;django.db.models.fields.AutoField: id&gt;, &lt;django.db.models.fields.CharField: name&gt;]
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; Permission._meta.fields
(&lt;django.db.models.fields.AutoField: id&gt;, &lt;django.db.models.fields.CharField: name&gt;, &lt;django.db.models.fields.related.ForeignKey: content_type&gt;, &lt;django.db.models.fields.CharField: codename&gt;)
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; Group.objects.create()
&lt;Group: &gt;
&gt;&gt;&gt; Group.objects.all()
&lt;QuerySet [&lt;Group: &gt;]&gt;
&gt;&gt;&gt; Group.objects.all()[0]
&lt;Group: &gt;
&gt;&gt;&gt; Group.objects.all()[0].__dict__
{&apos;_state&apos;: &lt;django.db.models.base.ModelState object at 0x7fda86e680a0&gt;, &apos;id&apos;: 1, &apos;name&apos;: &apos;&apos;}
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; g1 = Group.objects.get(id=1)
&gt;&gt;&gt; g1
&lt;Group: &gt;
&gt;&gt;&gt; g1.id
1
&gt;&gt;&gt; g1.name
&apos;&apos;
&gt;&gt;&gt; g1.name = &quot;permission gorup 1&quot;
&gt;&gt;&gt; g1.save()
&gt;&gt;&gt; g1
&lt;Group: permission gorup 1&gt;
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; p1 = Permission.objects.get(id=1)
&gt;&gt;&gt; p1
&lt;Permission: admin | log entry | Can add log entry&gt;
&gt;&gt;&gt; g1
&lt;Group: permission gorup 1&gt;
&gt;&gt;&gt; g1.permissions.add(p1)
&gt;&gt;&gt; g1
&lt;Group: permission gorup 1&gt;
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; g1.permissions
&lt;django.db.models.fields.related_descriptors.create_forward_many_to_many_manager.&lt;locals&gt;.ManyRelatedManager object at 0x7fda86ea4ca0&gt;
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; g1.permissions.all()
&lt;QuerySet [&lt;Permission: admin | log entry | Can add log entry&gt;]&gt;
&gt;&gt;&gt; user.groups.add(g1)
&gt;&gt;&gt; user.groups
&lt;django.db.models.fields.related_descriptors.create_forward_many_to_many_manager.&lt;locals&gt;.ManyRelatedManager object at 0x7fda86e599d0&gt;
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; user = User.objects.get(id=1)
&gt;&gt;&gt; user
&lt; <User: rafiq>
&gt;&gt;&gt;
&gt;&gt;&gt;  user.user_permissions.add(p1)
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; user.get_all_permissions()
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; user.groups.__dict__
{&apos;_constructor_args&apos;: ((&lt;User: rafiq&gt;,), {}), &apos;creation_counter&apos;: 21, &apos;model&apos;: &lt;class &apos;django.contrib.auth.models.Group&apos;&gt;, &apos;name&apos;: None, &apos;_db&apos;: None, &apos;_hints&apos;: {}, &apos;instance&apos;: &lt;User: rafiq&gt;, &apos;query_field_name&apos;: &apos;user&apos;, &apos;prefetch_cache_name&apos;: &apos;groups&apos;, &apos;source_field_name&apos;: &apos;user&apos;, &apos;target_field_name&apos;: &apos;group&apos;, &apos;symmetrical&apos;: False, &apos;through&apos;: &lt;class &apos;django.contrib.auth.models.User_groups&apos;&gt;, &apos;reverse&apos;: False, &apos;source_field&apos;: &lt;django.db.models.fields.related.ForeignKey: user&gt;, &apos;target_field&apos;: &lt;django.db.models.fields.related.ForeignKey: group&gt;, &apos;core_filters&apos;: {&apos;user__id&apos;: 1}, &apos;pk_field_names&apos;: {&apos;user&apos;: &apos;id&apos;}, &apos;related_val&apos;: (1,)}
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; user.groups.all()
&lt;QuerySet [&lt;Group: permission gorup 1&gt;]&gt;
&gt;&gt;&gt; ug = user.groups.all().first()
&gt;&gt;&gt; ug
&lt;Group: permission gorup 1&gt;
&gt;&gt;&gt; ug.__dict__
{&apos;_state&apos;: &lt;django.db.models.base.ModelState object at 0x7fda86e7b1f0&gt;, &apos;id&apos;: 1, &apos;name&apos;: &apos;permission gorup 1&apos;}
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; user.get_all_permissions()
{&apos;testapp.change_todo&apos;, &apos;auth.change_permission&apos;, &apos;auth.delete_permission&apos;, &apos;auth.view_user&apos;, &apos;contenttypes.change_contenttype&apos;, &apos;auth.add_user&apos;, &apos;authtoken.add_tokenproxy&apos;, &apos;authtoken.add_token&apos;, &apos;authtoken.view_token&apos;, &apos;sessions.view_session&apos;, &apos;contenttypes.view_contenttype&apos;, &apos;auth.view_permission&apos;, &apos;authtoken.view_tokenproxy&apos;, &apos;sessions.change_session&apos;, &apos;contenttypes.delete_contenttype&apos;, &apos;auth.delete_user&apos;, &apos;auth.add_permission&apos;, &apos;auth.change_group&apos;, &apos;admin.change_logentry&apos;, &apos;testapp.add_todo&apos;, &apos;auth.view_group&apos;, &apos;authtoken.delete_tokenproxy&apos;, &apos;admin.view_logentry&apos;, &apos;auth.change_user&apos;, &apos;sessions.add_session&apos;, &apos;sessions.delete_session&apos;, &apos;testapp.delete_todo&apos;, &apos;authtoken.change_token&apos;, &apos;authtoken.delete_token&apos;, &apos;authtoken.change_tokenproxy&apos;, &apos;auth.add_group&apos;, &apos;admin.delete_logentry&apos;, &apos;testapp.view_todo&apos;, &apos;admin.add_logentry&apos;, &apos;contenttypes.add_contenttype&apos;, &apos;auth.delete_group&apos;}
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; user.get_group_permissions()
{&apos;testapp.change_todo&apos;, &apos;auth.change_permission&apos;, &apos;auth.delete_permission&apos;, &apos;auth.view_user&apos;, &apos;contenttypes.change_contenttype&apos;, &apos;auth.add_user&apos;, &apos;authtoken.add_tokenproxy&apos;, &apos;authtoken.add_token&apos;, &apos;authtoken.view_token&apos;, &apos;sessions.view_session&apos;, &apos;contenttypes.view_contenttype&apos;, &apos;auth.view_permission&apos;, &apos;authtoken.view_tokenproxy&apos;, &apos;sessions.change_session&apos;, &apos;contenttypes.delete_contenttype&apos;, &apos;auth.delete_user&apos;, &apos;auth.add_permission&apos;, &apos;auth.change_group&apos;, &apos;admin.change_logentry&apos;, &apos;testapp.add_todo&apos;, &apos;auth.view_group&apos;, &apos;authtoken.delete_tokenproxy&apos;, &apos;admin.view_logentry&apos;, &apos;auth.change_user&apos;, &apos;sessions.add_session&apos;, &apos;sessions.delete_session&apos;, &apos;testapp.delete_todo&apos;, &apos;authtoken.change_token&apos;, &apos;authtoken.delete_token&apos;, &apos;authtoken.change_tokenproxy&apos;, &apos;auth.add_group&apos;, &apos;admin.delete_logentry&apos;, &apos;testapp.view_todo&apos;, &apos;admin.add_logentry&apos;, &apos;contenttypes.add_contenttype&apos;, &apos;auth.delete_group&apos;}
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; user.has_perm(&apos;auth.change_user&apos;)
True
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; user.has_perm(&apos;does.not.exist&apos;)
True
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; from django.contrib.auth.decorators import permission_required
&gt;&gt;&gt; 
&gt;&gt;&gt; @permission_required(&apos;auth.view_user&apos;)
... def users_list_view(request):
...     pass
... 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 

&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; {% if perms.auth.delete_user %} &lt;button&gt;Delete user!&lt;/button&gt; {% endif %}
  File &quot;&lt;console&gt;&quot;
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; &quot;&quot;&quot;from functools import wraps
... 
... def groups_only(*groups):
...     def inner(view_func):
...         @wraps(view_func)
...         def wrapper_func(request, *args, **kwargs):
...             if request.user.groups.filter(name__in=groups).exists():
...                 return view_func(request, *args, **kwargs)
...             else:
...                 return HttpResponse(&apos;You are not authorized to view this page&apos;)
...         return wrapper_func
...     return inner&quot;&quot;&quot;
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; &apos;&apos;&apos;----------------------------------------------from functools import wraps
... 
... def groups_only(*groups):
...     def inner(view_func):
...         @wraps(view_func)
...         def wrapper_func(request, *args, **kwargs):
...             if request.user.groups.filter(name__in=groups).exists():
...                 return view_func(request, *args, **kwargs)
...             else:
...                 return HttpResponse(&apos;You are not authorized to view this page&apos;)
...         return wrapper_func
...     return inner&apos;&apos;&apos;--------------------------------------------------------------
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; 
&gt;&gt;&gt; &apos;&apos;&apos;===============================================================As far as i can see you have tried to create a decorator of yours. However there are some problems in the logic;
... 
... from functools import wraps
... 
... def groups_only(*groups):
...     def inner(view_func):
...         @wraps(view_func)
...         def wrapper_func(request, *args, **kwargs):
...             if request.user.groups.filter(name__in=groups).exists():
...                 return view_func(request, *args, **kwargs)
...             else:
...                 return HttpResponse(&apos;You are not authorized to view this page&apos;)
...         return wrapper_func
...     return inner
... 
... You may use your new decorator as follows:
... 
... @groups_only(&apos;Admin&apos;, &apos;Registrar&apos;)
... def registrar_adminpage(request):
...      #this is for group permission &apos;Registrar&apos;
...     return render(request, &apos;Homepage/Registrar_adminsite.html&apos;})======================================================&apos;&apos;&apos;====================================

&gt;&gt;&gt; 
</pre>

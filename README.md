# CRUD
### Challenges: separating the domain and presentation logic, managing mutation, building a non-trivial layout.

The task is to build a frame containing the following elements: 
- an input text field for searches (Tprefix)
- a pair of input text fields (Tname and Tsurname)
- a list box (L)
- 3 buttons (BC, BU, BD)

![image](https://user-images.githubusercontent.com/51804994/114791056-2c41e480-9d5c-11eb-9174-0fc0c42a8630.png)


L presents a view of the data in the database that consists of a list of names. At most one entry can be selected in L at a time. By entering a string into Tprefix the user can filter the names whose surname start with the entered prefix—this should happen immediately without having to submit the prefix with enter. Clicking BC will append the resulting name from concatenating the strings in Tname and Tsurname to L. BU and BD are enabled iff an entry in L is selected. In contrast to BC, BU will not append the resulting name but instead replace the selected entry with the new name. BD will remove the selected entry. The layout is to be done like suggested in the screenshot. In particular, L must occupy all the remaining space.

**CRUD (Create, Read, Update and Delete)** represents a typical graphical business application. The primary challenge is the **separation of domain and presentation logic in the source code** that is more or less forced on the implementer due to the ability to filter the view by a prefix. Traditionally, some form of **MVC pattern** is used to achieve the separation of domain and presentation logic. Also, the approach to managing the mutation of the list of names is tested. A good solution will have a good separation between the domain and presentation logic without much overhead (e.g. in the form of toolkit specific concepts or language/paradigm concepts), a mutation management that is fast but not error-prone and a natural representation of the layout.


<!DOCTYPE html>
<html>

<head>
  <title>SRP Store</title>
  <link rel="stylesheet" type="text/css" href="styles.css" />
</head>

<body>
  <div class="tabs">
    <table class="table__wrap">
      <tbody>
        <tr>
          <td class="table__cell tabs__item " width="33%"><a href="/new.php"
              class="tabs__link">New</a> </td>
          <td class="table__cell tabs__item clicked" width="33%"> <a href="/top.php"
              class="tabs__link">Top</a> </td>
          <td class="table__cell tabs__item" width="33%"> <a href="/popular.php"
              class="tabs__link">Popular</a> </td>
        </tr>
      </tbody>
    </table>
  </div>
  <form action="/search.php">
    <input class="search__input js-search__input  search_suggest" type="text" id="query" name="query" placeholder="Search...">
    <input type="submit" value="Submit">
  </form>
  <div class="widgets-group widgets-group_top bb0" id="sz_gallery_loader">
    <div class="list-link__ava_2 p80"> <span> <img src="" aria-label="" alt="" class="preview  s81_80" width="80"
          height="80">
      </span> </div>
    <div class="cf"> <span class="grey right"> </span> <a href="Href_to_app1" class="arrow_link strong_link"><!-- --><b
          class="darkblue break-word">App name 1</b></a>
      <div class="pad_t_a break-word">App description 1</div>
      <div class="oh">
        <div class="oh grey pad_t_a">
          <span class="left">Symbian<span>
              <span>Size in mb<span>
        </div>
      </div>
    </div>
    <div class="list-link__ava_2 p80"> <span> <img src="app_pic" aria-label="" alt="" class="preview  s81_80" width="80" height="80">
      </span> </div>
    <div class="cf"> <span class="grey right"> </span> <a href="href_to_app2" class="arrow_link strong_link"><!-- --><b
          class="darkblue break-word">App name 2</b></a>
      <div class="pad_t_a break-word">App description 2</div>
      <div class="oh">
        <div class="oh grey pad_t_a">
          <span class="left">Java</span>
          <span class="t-padd_left">360x640</span>
          <span>Size in mb</span>
        </div>
      </div>
    </div>
  </div>
</body>

</html>
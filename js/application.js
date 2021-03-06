// Generated by CoffeeScript 1.10.0

/*!
   SQ2 Skill Calculator
   (c) 2016 Kag
 */

(function() {
  var checkBrowser, checkIEVersion, clearAllData, getQuery, hideMsgBox, showMsgBox;

  window.game = "sq2";

  window.version = 10;

  window.breakpoint = 768;

  window.breakpoint_def = 768;

  window.breakpoint_min = 0;

  window.breakpoint_max = 999999999;

  $(function() {
    var atoi, browser, cmpString, createSkillbox, decObj, decQuery, decmpString, encQuery, initialize, itoa, job2oneWord, loadData, loadJobData, loadSlots, msg, p, query, saveData, saveDatas, scanning, selectJob, setJobSkillLv, setQueryData, setSkillLevelFromInputWindow, setStat, showSkillLevelInputWindow, val, ver;
    initialize = function() {
      var d, data, datas, e, error, i, idx, item, job, len, len1, m, o, r, ref, save, saveDatas;
      saveDatas = {};
      try {
        saveDatas = $.parseJSON(localStorage.getItem(window.game));
      } catch (error) {
        e = error;
        saveDatas = {
          version: window.version,
          save: [],
          option: {}
        };
        datas = localStorage.getItem(window.game).split("|");
        for (m = 0, len = datas.length; m < len; m++) {
          data = datas[m];
          d = data.split(":");
          save = {
            name: d[0],
            data: d[1]
          };
          saveDatas.save.push(save);
        }
      }
      if (saveDatas === null) {
        save = {
          name: "",
          data: ""
        };
        saveDatas = {
          version: window.version,
          save: [],
          option: {}
        };
        for (i = o = 0; o < 30; i = ++o) {
          saveDatas.save.push(save);
        }
      }
      localStorage.setItem(window.game, JSON.stringify(saveDatas));
      $('#jobSelect').append($("<hr>").addClass("fade"));
      ref = window.job;
      for (idx = r = 0, len1 = ref.length; r < len1; idx = ++r) {
        job = ref[idx];
        item = $('<div>');
        $(item).attr("data-job", idx);
        $(item).text(job.name);
        $(item).addClass("jobs");
        $('#jobSelect').append(item);
        $('#jobSelect').append($("<hr>").addClass("fade"));
      }
      loadSlots();
      $("#loading").fadeOut();
      return $("#container").fadeIn();
    };
    loadSlots = function() {
      var i, len, m, mainJobStr, option, query, ref, results, save, saveDatas;
      $("select#slot").empty();
      option = $("<option>").text("セーブデータ選択").val("-1");
      $("select#slot").append(option);
      saveDatas = $.parseJSON(localStorage.getItem(window.game));
      ref = saveDatas.save;
      results = [];
      for (i = m = 0, len = ref.length; m < len; i = ++m) {
        save = ref[i];
        if (save.data !== "") {
          query = decQuery(save.data);
          mainJobStr = job2oneWord(query.job);
          option = $("<option>").text((i + 1) + ":(" + mainJobStr + ") \"" + save.name + "\"").val(i);
          results.push($("select#slot").append(option));
        } else {
          option = $("<option>").text((i + 1) + ": no data").val(i);
          results.push($("select#slot").append(option));
        }
      }
      return results;
    };
    job2oneWord = function(jidx) {
      var job, w;
      job = window.job[jidx];
      w = job.name.slice(0, 1);
      return w;
    };
    selectJob = function(jidx) {
      var h, text;
      $(".jobs").removeClass("selected");
      $(".jobs[data-job='" + jidx + "']").addClass("selected");
      text = $(".jobs[data-job='" + jidx + "']").text();
      $('#nowJob').text(text);
      loadJobData(jidx);
      $.slidebars.close();
      h = Number($('#container').height());
      h += Number($('#field').height() + 50);
      return $('body').css({
        "height": h + "px"
      });
    };
    createSkillbox = function(dat, idx) {
      var cell, i, item, level, levelNum, m, name, ref;
      item = $("<div>").addClass("skillBox " + dat.label);
      name = $("<p>").text(dat.name);
      $(name).addClass("name");
      if (dat.max !== 0) {
        levelNum = $("<div>").addClass("levelNum");
        $(levelNum).append($("<span>").addClass("nowLevel").text("0"));
        $(levelNum).append("/" + dat.max);
        level = $("<div>").addClass("gauge");
        cell = $("<span>").html('<i class="material-icons">label</i>');
        $(cell).addClass("md-14");
        $(cell).addClass("md-reset");
        $(cell).addClass("levelGauge");
        $(cell).addClass("md-inactive");
        $(cell).attr("data-level", "0");
        level.append(cell);
        for (i = m = 1, ref = dat.max; 1 <= ref ? m <= ref : m >= ref; i = 1 <= ref ? ++m : --m) {
          cell = $("<span>").html('<i class="material-icons">label</i>');
          $(cell).addClass("md-14");
          $(cell).addClass("md-dark");
          $(cell).addClass("md-inactive");
          $(cell).addClass("levelGauge");
          $(cell).attr("data-level", "" + i);
          level.append(cell);
        }
      }
      $(item).addClass("skill");
      $(item).attr("data-level", 0);
      $(item).attr("data-idx", idx);
      $(item).append(name);
      $(item).append(levelNum);
      $(item).append(level);
      return item;
    };
    loadJobData = function(jidx) {
      var cidx, dat, i, idx, item, job, len, len1, m, o, ref, ref1;
      $("#job .data").empty();
      job = window.job[jidx];
      $("#job").attr("data-job", job.label);
      ref = job.skill;
      for (idx = m = 0, len = ref.length; m < len; idx = ++m) {
        dat = ref[idx];
        item = createSkillbox(dat, idx);
        $("#job .data").append(item);
        if (dat.cond.level.length !== 0) {
          ref1 = dat.cond.level;
          for (cidx = o = 0, len1 = ref1.length; o < len1; cidx = ++o) {
            i = ref1[cidx];
            $("#job .data").append($('<div>').addClass("condlv " + dat.label + "-" + cidx).text("" + i));
          }
        }
      }
      return $("#job .data").append($("<img>").addClass("line").attr("src", "img/" + job.label + ".png"));
    };
    scanning = function() {
      var cond, d, i, idx, jidx, len, lv, m, n, results, s, s2, skills;
      jidx = $("#jobSelect .jobs.selected").attr("data-job");
      skills = window.job[jidx].skill;
      results = [];
      for (d = m = 0, len = skills.length; m < len; d = ++m) {
        s = skills[d];
        cond = s.cond;
        if (cond.src.length === 0) {
          continue;
        }
        $("#job .data [data-idx=" + d + "]").removeClass("disable");
        results.push((function() {
          var len1, o, r, ref, results1;
          results1 = [];
          for (i = o = 0, ref = cond.src.length; 0 <= ref ? o < ref : o > ref; i = 0 <= ref ? ++o : --o) {
            idx = "";
            for (n = r = 0, len1 = skills.length; r < len1; n = ++r) {
              s2 = skills[n];
              if (cond.src[i] === s2.label) {
                idx = n;
                break;
              }
            }
            lv = Number($("#job .data [data-idx=" + idx + "]").attr("data-level"));
            if (cond.level[i] > lv) {
              $("#job .data [data-idx=" + d + "]").addClass("disable");
              break;
            } else {
              results1.push(void 0);
            }
          }
          return results1;
        })());
      }
      return results;
    };
    setJobSkillLv = function(jidx, idx, level) {
      var aa, ab, ac, ad, ae, af, ag, ah, ai, aj, cond, cps, cpsLv, cpsidx, cskill, flaglen, gauge, i, j, k, label, len, len1, len2, len3, len4, len5, len6, m, max, nowLevel, o, plevel, plv, ps, pskill, r, rec, ref, ref1, ref10, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, s, sb, sidx, skill, skills, src, srcLabel, srcLevel, stack, u, v, x, y, z;
      skills = window.job[jidx].skill;
      sb = $("#job .data [data-idx='" + idx + "']");
      $(sb).attr("data-level", level);
      $(sb).find(".nowLevel").text(level);
      max = window.job[jidx].skill[idx].max;
      if (level === max) {
        $(sb).find(".nowLevel").text("★");
      }
      gauge = $(sb).children(".gauge");
      for (i = m = 1, ref = max; 1 <= ref ? m <= ref : m >= ref; i = 1 <= ref ? ++m : --m) {
        $(gauge).children("[data-level=" + i + "]").addClass("md-inactive");
      }
      for (i = o = 1, ref1 = level; 1 <= ref1 ? o <= ref1 : o >= ref1; i = 1 <= ref1 ? ++o : --o) {
        if (i > level) {
          break;
        }
        $(gauge).children("[data-level=" + i + "]").removeClass("md-inactive");
      }
      cond = window.job[jidx].skill[idx].cond;
      rec = true;
      if (cond.length === 0) {
        rec = false;
      }
      if (level === 0) {
        rec = false;
      }
      if (rec) {
        for (k = r = 0, ref2 = cond.src.length; 0 <= ref2 ? r < ref2 : r > ref2; k = 0 <= ref2 ? ++r : --r) {
          src = cond.src[k];
          for (i = u = 0, len = skills.length; u < len; i = ++u) {
            s = skills[i];
            plv = Number($("#job .data [data-idx='" + i + "']").attr("data-level"));
            if (s.label === src && cond.level[k] > plv) {
              setJobSkillLv(jidx, i, cond.level[k]);
            }
          }
        }
      }
      stack = [];
      label = skills[idx].label;
      for (i = x = 0, len1 = skills.length; x < len1; i = ++x) {
        skill = skills[i];
        if (skill.cond.src.length === 0) {
          continue;
        }
        ref3 = skill.cond.src;
        for (k = y = 0, len2 = ref3.length; y < len2; k = ++y) {
          cond = ref3[k];
          if (skill.cond.src[k] === label && level < skill.cond.level[k]) {
            stack.push(i);
          }
        }
      }
      if (stack.length !== 0) {
        for (z = 0, len3 = stack.length; z < len3; z++) {
          sidx = stack[z];
          setJobSkillLv(jidx, sidx, 0);
        }
      }
      if (skills[idx].root) {
        for (k = aa = 0, len4 = skills.length; aa < len4; k = ++aa) {
          skill = skills[k];
          if (skill.cond.src.length === 0) {
            continue;
          }
          cskill = null;
          for (i = ab = 0, ref4 = skill.cond.src.length; 0 <= ref4 ? ab < ref4 : ab > ref4; i = 0 <= ref4 ? ++ab : --ab) {
            if (skills[idx].label === skill.cond.src[i]) {
              cskill = skill;
              break;
            }
          }
          if (cskill === null) {
            continue;
          }
          if (cskill.root) {
            continue;
          }
          flaglen = 0;
          for (j = ac = 0, ref5 = cskill.cond.src.length; 0 <= ref5 ? ac < ref5 : ac > ref5; j = 0 <= ref5 ? ++ac : --ac) {
            for (cpsidx = ad = 0, len5 = skills.length; ad < len5; cpsidx = ++ad) {
              cps = skills[cpsidx];
              if (cps.label === cskill.cond.src[j]) {
                cpsLv = Number($("#job .data [data-idx=" + cpsidx + "]").attr("data-level"));
                if (cpsLv >= cskill.cond.level[j]) {
                  flaglen++;
                }
                break;
              }
            }
          }
          nowLevel = Number($("#job .data [data-idx=" + k + "]").attr("data-level"));
          if (flaglen === cskill.cond.src.length && nowLevel === 0) {
            sb = $("#job .data [data-idx='" + k + "']");
            $(sb).attr("data-level", 1);
            $(sb).find(".nowLevel").text(1);
            max = window.job[jidx].skill[idx].max;
            if (1 === max) {
              $(sb).find(".nowLevel").text("★");
            }
            gauge = $(sb).children(".gauge");
            for (v = ae = 1, ref6 = max; 1 <= ref6 ? ae <= ref6 : ae >= ref6; v = 1 <= ref6 ? ++ae : --ae) {
              $(gauge).children("[data-level=" + v + "]").addClass("md-inactive");
            }
            $(gauge).children("[data-level=1]").removeClass("md-inactive");
          }
        }
      }
      sb = $("#job .data [data-idx='" + idx + "']");
      $(sb).attr("data-level", level);
      $(sb).find(".nowLevel").text(level);
      max = window.job[jidx].skill[idx].max;
      if (level === max) {
        $(sb).find(".nowLevel").text("★");
      }
      gauge = $(sb).children(".gauge");
      for (i = af = 1, ref7 = max; 1 <= ref7 ? af <= ref7 : af >= ref7; i = 1 <= ref7 ? ++af : --af) {
        $(gauge).children("[data-level=" + i + "]").addClass("md-inactive");
      }
      for (i = ag = 1, ref8 = level; 1 <= ref8 ? ag <= ref8 : ag >= ref8; i = 1 <= ref8 ? ++ag : --ag) {
        if (i > level) {
          break;
        }
        $(gauge).children("[data-level=" + i + "]").removeClass("md-inactive");
      }
      if (skills[idx].cond.src.length !== 0) {
        flaglen = 0;
        for (i = ah = 0, ref9 = skills[idx].cond.src.length; 0 <= ref9 ? ah < ref9 : ah > ref9; i = 0 <= ref9 ? ++ah : --ah) {
          srcLabel = skills[idx].cond.src[i];
          srcLevel = skills[idx].cond.level[i];
          pskill = null;
          for (k = ai = 0, len6 = skills.length; ai < len6; k = ++ai) {
            ps = skills[k];
            plevel = Number($("#job .data [data-idx='" + k + "']").attr("data-level"));
            if (ps.label === srcLabel && plevel >= srcLevel) {
              pskill = ps;
              break;
            }
          }
          if (pskill === null) {
            continue;
          }
          if (pskill.root) {
            flaglen++;
          }
        }
        if (flaglen === skills[idx].cond.src.length) {
          if (level === 0) {
            sb = $("#job .data [data-idx='" + idx + "']");
            $(sb).attr("data-level", 1);
            $(sb).find(".nowLevel").text(1);
            max = window.job[jidx].skill[idx].max;
            if (1 === max) {
              $(sb).find(".nowLevel").text("★");
            }
            gauge = $(sb).children(".gauge");
            for (v = aj = 1, ref10 = max; 1 <= ref10 ? aj <= ref10 : aj >= ref10; v = 1 <= ref10 ? ++aj : --aj) {
              $(gauge).children("[data-level=" + v + "]").addClass("md-inactive");
            }
            return $(gauge).children("[data-level=1]").removeClass("md-inactive");
          }
        }
      }
    };
    showSkillLevelInputWindow = function(type, rjidx, idx) {
      var box, cat, dat, desc, desc2, i, level, levelNum, m, option, ref, select, slider, text;
      $('div#skillInput').empty();
      dat = window.job[rjidx].skill[idx];
      level = Number($("#" + type + " .data [data-idx=" + idx + "]").attr("data-level"));
      box = $("<div>").addClass("skillBox");
      levelNum = $("<p>").attr("id", "level-disp");
      select = $("<select>").addClass("levelSelect");
      for (i = m = 0, ref = dat.max; 0 <= ref ? m <= ref : m >= ref; i = 0 <= ref ? ++m : --m) {
        option = $("<option>").text(i).attr("value", i);
        $(select).append(option);
      }
      $(select).val(level);
      $(levelNum).append(select);
      $(levelNum).append("/" + dat.max);
      $(box).append(levelNum);
      $(box).append($("<p>").addClass("name").text(dat.name));
      slider = $("<div>").addClass("slider").attr("id", "slider");
      $(slider).slider({
        min: 0,
        max: dat.max,
        range: "min",
        value: level,
        slide: function(e, ui) {
          return $('#skillInput .levelSelect').val(ui.value);
        }
      });
      $(box).append(slider);
      $(box).attr("data-type", type);
      $(box).attr("data-rjidx", rjidx);
      $(box).attr("data-idx", idx);
      text = null;
      text = window.job[rjidx].skillText[dat.label];
      cat = $("<p>").addClass("desc").html(text.cat);
      desc = $("<p>").addClass("desc").html(text.desc);
      desc2 = $("<p>").addClass("desc").html(text.desc2);
      $(box).append(cat);
      $(box).append($("<hr>").addClass("fade-dark"));
      $(box).append(desc);
      $(box).append($("<hr>").addClass("fade-dark"));
      $(box).append(desc2);
      $('div#skillInput').append(box);
      return $('div#skillInput').dialog("open");
    };
    setSkillLevelFromInputWindow = function() {
      var box, idx, level, rjidx, type;
      box = $("#skillInput > .skillBox");
      type = $(box).attr("data-type");
      idx = Number($(box).attr("data-idx"));
      rjidx = Number($(box).attr("data-rjidx"));
      level = Number($(box).find("select").val());
      setJobSkillLv(rjidx, idx, level);
      $("#skillInput").fadeOut("fast");
      return $("#dummy").fadeOut("fast");
    };
    setStat = function() {
      var Jskills, bonus, jidx, maxLv, maxSP, nowLv, nowSP, remSP;
      nowSP = 0;
      jidx = Number($("#jobSelect .jobs.selected").attr("data-job"));
      Jskills = window.job[jidx].skill;
      $("#job .data .skill").each(function() {
        var flag, i, idx, len, len1, m, o, ref, s, skill, src, val;
        flag = false;
        idx = Number($(this).attr("data-idx"));
        skill = Jskills[idx];
        if (skill.cond.src.length !== 0) {
          ref = skill.cond.src;
          for (m = 0, len = ref.length; m < len; m++) {
            src = ref[m];
            for (i = o = 0, len1 = Jskills.length; o < len1; i = ++o) {
              s = Jskills[i];
              if (src === s.label) {
                if (s.root) {
                  flag = true;
                }
                break;
              }
            }
          }
        }
        val = Number($(this).attr("data-level"));
        nowSP += val;
        if (flag && val > 0) {
          return nowSP -= 1;
        }
      });
      maxSP = 2 + Number($('#lvCap').val()) + Number($('#retire').val());
      remSP = maxSP - nowSP;
      maxLv = Number($('#lvCap').val());
      bonus = Number($('#retire').val());
      nowLv = Math.min(maxLv, Math.max(1, nowSP - 2 - bonus));
      if (remSP >= 0) {
        $("#stat").text("Lv: " + nowLv + "　使用: " + nowSP + "pt　Lv" + maxLv + "まで残り : " + remSP + "pt");
      } else {
        $("#stat").text("Lv: " + nowLv + "　使用: " + nowSP + "pt　オーバー : " + (-remSP) + "pt");
      }
      if (remSP < 0) {
        return $('#stat').css("background-color", "#FFD3E1");
      } else {
        return $('#stat').css("background-color", "white");
      }
    };
    encQuery = function() {
      var job, jtemp, lvCap, query, retire;
      query = "";
      query += window.version;
      job = Number($("#jobSelect .jobs.selected").attr("data-job"));
      query += itoa(job);
      retire = $('#retire').val();
      query += retire;
      lvCap = $('#lvCap').val();
      query += lvCap;
      query += "_";
      jtemp = "";
      $("#job .data .skill").each(function() {
        var level;
        level = Number($(this).attr("data-level"));
        return jtemp += itoa(level);
      });
      query += cmpString(jtemp);
      return query;
    };
    decQuery = function(query) {
      var q, res;
      res = {};
      q = query.split("_");
      res.version = Number(q[0].slice(0, 2));
      res.job = atoi(q[0].slice(2, 3));
      res.retire = q[0].slice(3, 5);
      res.lvCap = q[0].slice(5, 7);
      res.jskill = decmpString(q[1]);
      return res;
    };
    setQueryData = function(q) {
      var c, idx, len, level, m, ref, text;
      text = "";
      if (window.version !== q.version) {
        selectJob(0);
        return "クエリの書式に変更があったためデータを復元できません。<br>初期化します。";
      }
      selectJob(q.job);
      $('#retire').val(q.retire);
      $('#lvCap').val(q.lvCap);
      if (window.job[q.job].skill.length !== q.jskill.length) {
        text = "クエリに異常があります。正確に復元できませんでした。";
      }
      ref = q.jskill;
      for (idx = m = 0, len = ref.length; m < len; idx = ++m) {
        c = ref[idx];
        level = atoi(c);
        setJobSkillLv(q.job, idx, level);
      }
      return text;
    };
    cmpString = function(str) {
      var c, cnt, len, m, ret, t;
      ret = "";
      t = "";
      cnt = 1;
      for (m = 0, len = str.length; m < len; m++) {
        c = str[m];
        if (t === c) {
          cnt++;
        } else {
          if (cnt !== 1) {
            ret += cnt;
          }
          ret += c;
          cnt = 1;
          t = c;
        }
      }
      ret += cnt;
      return ret;
    };
    decmpString = function(str) {
      var chars, i, k, l, m, nums, o, r, ref, ref1, ref2, ref3, ret, u;
      ret = "";
      if (str == null) {
        return ret;
      }
      l = 0;
      chars = str.split(/[0-9]+/);
      nums = str.split(/[a-zA-Z]+/);
      nums.shift();
      chars.pop();
      for (i = m = 0, ref = chars.length; 0 <= ref ? m < ref : m > ref; i = 0 <= ref ? ++m : --m) {
        if (chars[i].length === 1) {
          for (k = o = 0, ref1 = nums[i]; 0 <= ref1 ? o < ref1 : o > ref1; k = 0 <= ref1 ? ++o : --o) {
            ret += chars[i];
          }
        } else {
          for (k = r = 0, ref2 = chars[i].length - 1; 0 <= ref2 ? r < ref2 : r > ref2; k = 0 <= ref2 ? ++r : --r) {
            ret += chars[i][k];
          }
          for (k = u = 0, ref3 = nums[i]; 0 <= ref3 ? u < ref3 : u > ref3; k = 0 <= ref3 ? ++u : --u) {
            ret += chars[i].slice(-1);
          }
        }
      }
      return ret;
    };
    itoa = function(int) {
      var str;
      str = "abcdefghijklmnopqrstuvwxwz";
      return str.charAt(int);
    };
    atoi = function(char) {
      var str;
      str = "abcdefghijklmnopqrstuvwxwz";
      return str.indexOf(char);
    };
    saveData = function() {
      var data, name, saveDatas, slot, str;
      slot = Number($("select#slot").val());
      if (slot === -1) {
        showMsgBox($("<p>").text("セーブするスロットを選択してください。"));
        return;
      }
      name = $('input#name').val();
      saveDatas = $.parseJSON(localStorage.getItem(window.game));
      str = encQuery();
      data = name + ":" + str;
      saveDatas.save[slot].name = name;
      saveDatas.save[slot].data = str;
      localStorage.setItem(window.game, JSON.stringify(saveDatas));
      loadSlots();
      return $("select#slot").val(slot);
    };
    loadData = function() {
      var decObj, msg, p, save, saveDatas, slot;
      slot = Number($("select#slot").val());
      if (slot === -1) {
        return;
      }
      saveDatas = $.parseJSON(localStorage.getItem(window.game));
      save = saveDatas.save[slot];
      if (save.data !== "") {
        decObj = decQuery(save.data);
        if (decObj === null) {
          return;
        }
        if (decObj.version !== window.version) {
          showMsgBox($("<p>").text("セーブデータに互換性がないようです"));
        }
        msg = setQueryData(decObj);
        $('input#name').val(save.name);
        if (msg !== "") {
          p = $("<p>").html(msg);
          showMsgBox(p);
        }
        return $.slidebars.close();
      }
    };
    browser = checkBrowser();
    if (browser === "IE") {
      ver = checkIEVersion();
      if (ver <= 9) {
        return false;
      }
    }
    initialize();
    $('#msgbox').dialog({
      autoOpen: false,
      dialogClass: "messageBox",
      draggable: false,
      modal: true,
      resizable: false,
      height: 300,
      open: function() {
        return $(this).find('input, textarea, select').blur();
      }
    });
    $('#about').dialog({
      autoOpen: false,
      dialogClass: "changeLog",
      draggable: false,
      modal: true,
      resizable: false
    });
    $('#option').dialog({
      autoOpen: false,
      draggable: false,
      modal: true,
      resizable: false,
      buttons: [
        {
          text: "決定",
          click: function() {
            var saveDatas, val;
            val = $("input[name='use']:checked").val();
            saveDatas = $.parseJSON(localStorage.getItem(window.game));
            saveDatas.option.usedialog = val;
            localStorage.setItem(window.game, JSON.stringify(saveDatas));
            if (val === "def") {
              window.breakpoint = window.breakpoint_def;
            } else if (val === "yes") {
              window.breakpoint = window.breakpoint_max;
            } else if (val === "no") {
              window.breakpoint = window.breakpoint_min;
            }
            $.slidebars.close();
            return $(this).dialog("close");
          }
        }, {
          text: "キャンセル",
          click: function() {
            return $(this).dialog("close");
          }
        }
      ],
      open: function() {
        var opt, saveDatas;
        saveDatas = $.parseJSON(localStorage.getItem(window.game));
        opt = saveDatas.option.usedialog;
        if (opt !== void 0) {
          return $("input[name='use']").val([opt]);
        } else {
          return $("input[name='use']").val(["def"]);
        }
      }
    });
    $('#skillInput').dialog({
      autoOpen: false,
      dialogClass: "skillInput",
      draggable: false,
      modal: true,
      resizable: false,
      height: 300,
      buttons: [
        {
          text: "OK",
          click: function() {
            setSkillLevelFromInputWindow();
            scanning();
            setStat();
            return $(this).dialog("close");
          }
        }
      ],
      open: function() {
        return $(this).find('input, textarea, select').blur();
      },
      close: function() {
        return $(this).empty();
      }
    });
    $.slidebars({
      scrollLock: true,
      siteClose: true
    });
    $('.sb-toggle-left').button({
      icons: {
        primary: "ui-icon-carat-1-w"
      }
    });
    $('.sb-toggle-right').button({
      icons: {
        secondary: "ui-icon-carat-1-e"
      }
    });
    saveDatas = $.parseJSON(localStorage.getItem(window.game));
    val = saveDatas.option.usedialog;
    if (val === "def") {
      window.breakpoint = window.breakpoint_def;
    } else if (val === "yes") {
      window.breakpoint = window.breakpoint_max;
    } else if (val === "no") {
      window.breakpoint = window.breakpoint_min;
    }
    query = getQuery();
    if (query["q"] !== void 0) {
      decObj = decQuery(query["q"]);
      msg = setQueryData(decObj);
      if (msg !== "") {
        p = $("<p>").html(msg);
        showMsgBox(p);
      }
      scanning();
      setStat();
    } else {
      selectJob(0);
      scanning();
      setStat();
    }
    $(document).on("click", ".ui-widget-overlay", function() {
      return $(this).next().find(".ui-dialog-content").dialog("close");
    });
    $(document).on("click", "#delDatas", function() {
      if (window.confirm('セーブデータを全て削除してもよろしいですか？')) {
        return clearAllData();
      }
    });
    $(document).on("click", "#showAbout", function() {
      return $('#about').dialog("open");
    });
    $(document).on("click", "#showOption", function() {
      return $('#option').dialog("open");
    });
    $(document).on("click", "#load", function() {
      loadData();
      scanning();
      return setStat();
    });
    $(document).on("click", "#save", function() {
      return saveData();
    });
    $(document).on("click", "#clear", function() {
      var job;
      job = Number($("#jobSelect .jobs.selected").attr("data-job"));
      selectJob(job);
      scanning();
      return setStat();
    });
    $(document).on("click", "#copy", function() {
      var elem, url;
      url = location.href.split("?")[0] + "?q=" + encQuery();
      elem = $('<div>コピーして利用してください。<br></div>').append($("<textarea>").attr("id", "output").text(url));
      return showMsgBox(elem);
    });
    $(document).on("change", "#retire", function() {
      return setStat();
    });
    $(document).on("change", "#lvCap", function() {
      return setStat();
    });
    $(document).on("click", ".jobs", function() {
      var cls;
      cls = $(this).attr("data-job");
      selectJob(cls);
      scanning();
      return setStat();
    });
    $(document).on("click", "#job .data .levelGauge", function() {
      var idx, jidx, level;
      if ($(window).width() <= window.breakpoint) {
        return;
      }
      level = Number($(this).attr("data-level"));
      idx = $(this).parents(".skillBox").attr("data-idx");
      jidx = $("#jobSelect .jobs.selected").attr("data-job");
      setJobSkillLv(jidx, idx, level);
      scanning();
      return setStat();
    });
    $(document).on("click", "#job .skillBox", function() {
      var idx, jidx;
      if ($(window).width() > window.breakpoint) {
        return;
      }
      idx = Number($(this).attr("data-idx"));
      jidx = Number($("#jobSelect .jobs.selected").attr("data-job"));
      return showSkillLevelInputWindow("job", jidx, idx);
    });
    $(document).on("click", "#dummy", function() {
      $("#msgbox").fadeOut("fast");
      $("#skillInput").fadeOut("fast");
      return $("#dummy").fadeOut("fast");
    });
    $(document).on("change", "#skillInput .levelSelect", function() {
      return $('#skillInput #slider').slider("value", $(this).val());
    });
    $(document).on("focus click", "#output", function() {
      return $(this).select();
    });
    return $(document).tooltip({
      items: '.skillBox .name',
      content: function() {
        var elem, idx, jidx, skill, skillText, type;
        if ($(window).width() <= window.breakpoint) {
          return false;
        }
        type = $(this).parents(".skillField").attr("id");
        jidx = Number($('#jobSelect .jobs.selected').attr("data-job"));
        idx = Number($(this).parents(".skillBox").attr("data-idx"));
        skill = window.job[jidx].skill[idx];
        skillText = window.job[jidx].skillText[skill.label];
        if (skillText === void 0) {
          return false;
        }
        elem = $('<div>').addClass("tooltip");
        $(elem).append($('<p>').addClass("cat").html(skillText.cat));
        $(elem).append($('<hr>').addClass("fade-dark"));
        $(elem).append($('<p>').addClass("desc").html(skillText.desc));
        $(elem).append($('<hr>').addClass("fade-dark"));
        $(elem).append($('<p>').addClass("desc").html(skillText.desc2));
        return $(elem);
      }
    });
  });

  checkBrowser = function() {
    var appVersion, userAgent;
    userAgent = window.navigator.userAgent.toLowerCase();
    appVersion = window.navigator.appVersion.toLowerCase();
    if (userAgent.indexOf('chrome') !== -1) {
      return "Chrome";
    } else if (userAgent.indexOf('safari') !== -1) {
      return "Safari";
    } else if (userAgent.indexOf('firefox') !== -1) {
      return "Firefox";
    } else if (userAgent.indexOf('opera') !== -1) {
      return "Opera";
    } else if (userAgent.indexOf('msie') !== -1) {
      return "IE";
    } else {
      return "Others";
    }
  };

  checkIEVersion = function() {
    var appVersion;
    appVersion = window.navigator.appVersion.toLowerCase();
    if (appVersion.indexOf("msie 6.") !== -1) {
      return 6;
    } else if (appVersion.indexOf("msie 7.") !== -1) {
      return 7;
    } else if (appVersion.indexOf("msie 8.") !== -1) {
      return 8;
    } else if (appVersion.indexOf("msie 9.") !== -1) {
      return 9;
    } else {
      return 10;
    }
  };

  getQuery = function() {
    var arr, h, hash, len, m, url, vars;
    vars = {};
    url = window.location.search;
    hash = url.slice(1).split("&");
    if (hash.length === 1 && hash[0].length === 0) {
      return vars;
    }
    for (m = 0, len = hash.length; m < len; m++) {
      h = hash[m];
      arr = h.split("=");
      vars[arr[0]] = arr[1];
    }
    return vars;
  };

  showMsgBox = function(elem) {
    $('div#msgbox').empty();
    $('div#msgbox').append(elem);
    return $('div#msgbox').dialog("open");
  };

  hideMsgBox = function() {
    $('div#dummy').fadeOut('fast');
    $('div#msgbox').fadeOut('fast');
    return $('div#msgbox').empty();
  };

  clearAllData = function() {
    localStorage.removeItem(window.game);
    return location.reload();
  };

}).call(this);

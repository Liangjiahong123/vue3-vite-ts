<script setup lang="ts">
import { APP_TITLE } from "@/constants/appConfig";
import { IconView, Dropdown } from "@/components/common";
import { ImgUtils } from "@/utils/tools";
</script>

<template>
  <el-header class="header-wrapper al-center justify-between">
    <div class="left al-center">
      <el-image class="logo" :src="ImgUtils.getAssetsImg('background/logo.png')" />
      <div class="app-title">{{ APP_TITLE }}</div>
    </div>
    <div class="right al-center">
      <IconView showToolTip :toolTipConfig="{ content: '消息中心', placement: 'bottom' }">
        <el-image :src="ImgUtils.getAssetsImg('background/icon-notice.png')" />
      </IconView>
      <el-divider class="!mx-4" direction="vertical" />
      <el-avatar :size="30" :src="ImgUtils.getAssetsImg('background/avatar.png')" />
      <Dropdown class="user-name">
        <div class="al-center pointer">
          <span>admin</span>
          <IconView icon="arrowDown" />
        </div>
        <template #menu>
          <el-dropdown-item command="getUser">用户信息</el-dropdown-item>
          <el-dropdown-item command="updatePwd">修改密码</el-dropdown-item>
          <el-dropdown-item command="logout">退出登录</el-dropdown-item>
          <el-dropdown-item center divided disabled>版本</el-dropdown-item>
        </template>
      </Dropdown>
    </div>
  </el-header>
</template>

<style scoped lang="less">
.header-wrapper {
  background: #fff;
  box-shadow: 1px 0 5px 0 rgb(90 90 90/0.2);

  .logo {
    width: 28px;
  }

  .app-title {
    margin-left: 10px;
    font-size: 18px;
    color: #262626;
    font-weight: bold;
  }

  .user-name {
    margin-left: 10px;
    color: #595959;
  }
}
</style>

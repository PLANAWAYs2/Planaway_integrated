package com.example.planaway.dto;

import java.util.*;
import java.util.stream.Collectors;

public enum NationCategory {

    ROOT("여행할 나라를 선택하세요", null),
    CONTINENT1("아시아", ROOT),
    CONTINENT_ASIA1("대한민국", CONTINENT1),
    CONTINENT_ASIA2("일본", CONTINENT1),

    CONTINENT2("유럽", ROOT),
    CONTINENT_EUROPE1("프랑스", CONTINENT2),

    CONTINENT3("북아메리카", ROOT),
    CONTINENT_NORTH1("미국", CONTINENT3),

    CONTINENT4("남아메리카", ROOT),
    CONTINENT_SOUTH1("브라질", CONTINENT4),

    CONTINENT5("아프리카", ROOT),
    CONTINENT_AFRICA1("나비미아", CONTINENT5),

    CONTINENT6("오세아니아", ROOT),
    CONTINENT_OCEANIA1("호주", CONTINENT6);

    // 카테고리 이름
    private final String title;
    // 부모 카테고리
    private final NationCategory parentCategory;

    // 자식카테고리
    private final List<NationCategory> childCategories;

    NationCategory(String title, NationCategory parentCategory) {
        this.childCategories = new ArrayList<>();
        this.title = title;
        this.parentCategory = parentCategory;
        if(Objects.nonNull(parentCategory)) parentCategory.childCategories.add(this);
    }

    public String getTitle() {
        return title;
    }

    // 부모카테고리 Getter
    public Optional<NationCategory> getParentCategory() {
        return Optional.ofNullable(parentCategory);
    }

    // 자식카테고리 Getter
    public List<NationCategory> getChildCategories() {
        return Collections.unmodifiableList(childCategories);
    }

    // 마지막 카테고리인지 반환
    public boolean isLeafCategory() {
        return childCategories.isEmpty();
    }

    // 마지막 카테고리들 반환
    public List<NationCategory> getLeafCategories() {
        return Arrays.stream(NationCategory.values())
                .filter(category -> category.isLeafCategoryOf(this))
                .collect(Collectors.toList());
    }

    private boolean isLeafCategoryOf(NationCategory category) {
        return this.isLeafCategory() && category.contains(this);
    }

    private boolean contains(NationCategory category) {
        if(this.equals(category)) return true;

        return Objects.nonNull(category.parentCategory) && this.contains(category.parentCategory);
    }

}
